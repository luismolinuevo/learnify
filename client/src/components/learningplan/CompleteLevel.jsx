import React, { useState, useEffect } from "react";
import { updateSubLevel } from "../../lib/levels";

export default function CompleteLevel({ isCompleted, sublevelId }) {
  const [isChecked, setIsChecked] = useState(false); // Initialize with false

  useEffect(() => {
    setIsChecked(isCompleted); // Update the state when `isCompleted` changes
  }, [isCompleted]);

  const handleChange = async () => {
    setIsChecked((prevState) => !prevState); // Toggle the value

    try {
      const data = {
        isCompleted: !isChecked,
      };
      const edit = await updateSubLevel(data, sublevelId);

      if (edit?.success) {
        // Handle success if needed
      }
    } catch (error) {
      console.error("Error updating checkbox state:", error);
    }
  };

  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
    </div>
  );
}
