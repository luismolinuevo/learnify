export const getLearningPlan = async (planId) => {
    try {
      const learningplan = await fetch(
        `${import.meta.env.VITE_PUBLIC_BACKEND_URL}/api/learningplan/${planId}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            // Authorization: `Bearer ${token}`,
          },
        }
      );
  
      if (learningplan.ok) {
        const res = await learningplan.json();
  
        return res;
      }
    } catch (error) {
      console.log(error.message);
      return error;
    }
  };

  export const createLearningPlan = async (data) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_PUBLIC_BACKEND_URL}/api/learningplan`,
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
          "Create learning plan request request failed. Response status:",
          response.status
        );
        const errorData = await response.json();
        console.error("Error details:", errorData);
  
        throw new Error("Create learning plan failed");
      }
  
      // If the response is successful, return the data (if needed)
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      // Log more details about the error
      console.error("Error during creating learning plan:", error);
      throw error;
    }
  };
  