import React from "react";

const PopularClasses = () => {
  return (
    <div className="md:w-[80%] mx-auto my-28">
      <div>
        <h1 className="text-5xl font-bold text-center">
          Our <span className="text-secondary">Popular</span>Classes
        </h1>
        <div className="w-[40%] text-center mx-auto my-4">
          <p className="text-gray-500 font-semibold text-lg">
            Explore our classes . Here is some popular classes based on how many
            student enrolled
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopularClasses;
