import prisma from "../db/index.js";

export async function createLevels(req, res) {
  try {
    const levelsData = req.body.levels;

    for (const levelData of levelsData) {
      const createdLevel = await prisma.level.create({
        data: {
          title: levelData.title,
          reason: levelData.reason,
          what: levelData.what,
          hoursToComplete: levelData.hours_to_complete,
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
              levelId: createdLevel.id,
            },
          });
        }
      }
    }

    res
      .status(201)
      .json({ message: "Levels and sublevels created successfully." });
  } catch (error) {
    console.error("Error creating levels and sublevels:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getLevels(req, res) {
  try {
    const levels = await prisma.level.findMany({

    })

    return res.status(200).json({
        success: true,
        message: "Got all levels for plan",
        levels
    })
  } catch (error) {
    console.error("Error getting levels", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
