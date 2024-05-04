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

  export const getLearningPlans = async () => {
    try {
      const learningplan = await fetch(
        `${import.meta.env.VITE_PUBLIC_BACKEND_URL}/api/learningplans/`,
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
}

export const createLearningPlan = async (data) => {
    try {
      // Step 1: Generate the learning plan prompt
      const generatedPlanResponse = await fetch(
        `${import.meta.env.VITE_PUBLIC_BACKEND_URL}/api/generatelearningplan`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
  
      if (!generatedPlanResponse.ok) {
        console.error(
          "Generate learning plan request failed. Response status:",
          generatedPlanResponse.status
        );
        const errorData = await generatedPlanResponse.json();
        console.error("Error details:", errorData);
        throw new Error("Generate learning plan failed");
      }
  
      const generatedPlanData = await generatedPlanResponse.json();
  
      const levelsData = {
          levels: generatedPlanData
      }
  
      // Step 2: Create the learning plan in the database
      const createPlanResponse = await fetch(
        `${import.meta.env.VITE_PUBLIC_BACKEND_URL}/api/learningplan/`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
  
      if (!createPlanResponse.ok) {
        console.error(
          "Create learning plan request failed. Response status:",
          createPlanResponse.status
        );
        const errorData = await createPlanResponse.json();
        console.error("Error details:", errorData);
        throw new Error("Create learning plan failed");
      }
  
      // If the response is successful, return any data if needed
      const responseData = await createPlanResponse.json();
  
      const planId = responseData.newPlan.id;
  
      const levelCreation = await createlevels(levelsData, planId)
      return levelCreation;
    } catch (error) {
      // Log more details about the error
      console.error("Error during creating learning plan:", error);
      throw error;
    }
  };
  