import React from "react";

const Array = () => {
  const fruits = ["apple", "banana", "peach", "dragonfruit", "orange"];
  return (
    <>
      <h1>Array in React</h1>
      <p>{fruits}</p>
      <p>{fruits[0]}</p>

      {/* <ul>
        {fruits.map((fruit) => {
          return (
            <>
              <li>{fruit}</li>
            </>
          );
        })}
      </ul> */}
      <ul>
        {fruits.map((fruit) => (
          <>
            <li>{fruit}</li>
          </>
        ))}
      </ul>
    </>
  );
};

export default Array;
