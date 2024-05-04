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
  };
  
  