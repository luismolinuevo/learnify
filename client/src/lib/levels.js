export const getLevels = async (planId) => {
  try {
    const levels = await fetch(
      `${import.meta.env.VITE_PUBLIC_BACKEND_URL}/api/levels/${planId}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          // Authorization: `Bearer ${token}`,
        },
      }
    );

    if (levels.ok) {
      const res = await levels.json();

      return res;
    }
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

export const updateSubLevel = async (data, sublevelId) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_PUBLIC_BACKEND_URL}/api/sublevel/${sublevelId}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          //   Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      console.error(
        "Edit sublevel request request failed. Response status:",
        response.status
      );
      const errorData = await response.json();
      console.error("Error details:", errorData);

      throw new Error("Edit sublevel failed");
    }
    
    // If the response is successful, return the data (if needed)
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    // Log more details about the error
    console.error("Error during editing sublevel:", error);
    throw error;
  }
};

  export const getSubLevel = async (sublevelId) => {
    try {
      const level = await fetch(
        `${import.meta.env.VITE_PUBLIC_BACKEND_URL}/api/sublevel/${sublevelId}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            // Authorization: `Bearer ${token}`,
          },
        }
      );
  
      if (level.ok) {
        const res = await level.json();
  
        return res;
      }
    } catch (error) {
      console.log(error.message);
      return error;
    }
  };

export const createlevels = async (data, planId) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_PUBLIC_BACKEND_URL}/api/levels/${planId}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          //   Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      console.error(
        "Create levels request request failed. Response status:",
        response.status
      );
      const errorData = await response.json();
      console.error("Error details:", errorData);

      throw new Error("Create levels failed");
    }

    // If the response is successful, return the data (if needed)
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    // Log more details about the error
    console.error("Error during create levels:", error);
    throw error;
  }
};

