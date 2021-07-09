import React from "react";

export default function Results() {
  const mock = [1, 2, 3, 4];
  return (
    <div className="flex flex-wrap justify-center sm:justify-between">
      {mock.map((curr, index) => {
        return (
          <div
            key={index}
            className="w-full bg-green-400 border-black h-48 sm:w-half-space mb-5"
          >
              <p>{curr}</p>
          </div>
        );
      })}
    </div>
  );
}
