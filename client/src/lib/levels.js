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
  