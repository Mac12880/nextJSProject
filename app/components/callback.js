import React, { useState } from "react";

const Callback = ({ getColor }) => {
  const [activeColor, setActiveColor] = useState(null);
  const handleChange = (e) => {
    const { value } = e.target;
    setActiveColor(value);
    getColor(value);
  };
  return <input onChange={handleChange} value={activeColor} className="mt-3" />;
};

export default Callback;
