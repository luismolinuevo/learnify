import React, { useState } from "react";

export default function CompleteLevel({ isCompleted }) {
  const [isChecked, setIsChecked] = useState(isCompleted);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  

  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
    </div>
  );
}
