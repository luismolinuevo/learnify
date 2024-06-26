import prisma from "../db/index.js";

export async function createLevels(req, res) {
  try {
    const { planId } = req.params;
    const levelsData = req.body.levels;

    // const jsonString = JSON.stringify(levelsData);

    for (const levelData of levelsData) {
      const createdLevel = await prisma.level.create({
        data: {
          title: levelData.title,
          reason: levelData.reason,
          what: levelData.what,
          hoursToComplete: levelData.hours_to_complete,
          plan: { connect: { id: parseInt(planId) } },
        },
      });

      const sublevelsData = levelData.sublevels;

      if (sublevelsData && sublevelsData.length > 0) {
        for (const sublevelData of sublevelsData) {
          await prisma.sublevel.create({
            data: {
              title: sublevelData.title,
              what: sublevelData.what,
              how: sublevelData.how,
              resources: sublevelData.resources,
              project: sublevelData.project,
              level: { connect: { id: createdLevel.id } },
            },
          });
        }
      }
    }

    return res.status(201).json({
      success: true,
      message: "Levels and sublevels created successfully.",
    });
  } catch (error) {
    console.error("Error creating levels and sublevels:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getLevels(req, res) {
  try {
    const { planId } = req.params;
    const levels = await prisma.level.findMany({
      where: {
        planId: parseInt(planId),
      },
      include: {
        sublevels: true,
      },
    });

    if (levels) {
      return res.status(200).json({
        success: true,
        message: "Got all levels for plan",
        levels,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Unable to get levels",
        levels,
      });
    }
  } catch (error) {
    console.error("Error getting levels", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getSubLevel(req, res) {
  try {
    const { sublevelId } = req.params;
    const sublevel = await prisma.sublevel.findUnique({
      where: {
        id: parseInt(sublevelId),
      },
    });

    if (sublevel) {
      return res.status(200).json({
        success: true,
        message: "Got all levels for plan",
        sublevel,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Unable to get sublevel",
        sublevel,
      });
    }
  } catch (error) {
    console.error("Error getting levels", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function editSubLevel(req, res) {
  try {
    const { sublevelId } = req.params;
    const { isCompleted } = req.body;

    const sublevel = await prisma.sublevel.updateMany({
      where: {
        id: parseInt(sublevelId),
      },
      data: {
        isCompleted: isCompleted,
      },
    });

    if (sublevel) {
      return res.status(200).json({
        success: true,
        message: "Updated sublevel success",
        sublevel,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Unable to update sublevel",
      });
    }
  } catch (error) {
    console.error("Error getting levels", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
