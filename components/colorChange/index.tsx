"use client";
import React, { useState, useEffect } from "react";

const colors = [
  "text-red-500",
  "text-blue-500",
  "text-[#FFCD4B]",
  "text-[#FF7676]",
  "text-[#FF7676]",
  "text-green-500",
  "text-yellow-500",
];

type colorChangeComponentProps = {
  inputString: string;
};

const ColorChangingText = (props: colorChangeComponentProps) => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="inline">
      <span className={`${colors[currentColorIndex]}`}>
        {props.inputString}
      </span>
    </div>
  );
};

export default ColorChangingText;
