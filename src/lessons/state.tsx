import { useState } from "react";

// State
export const ChoosePerson = () => {
  const [person, setPerson] = useState("");

  return (
    <div>
      <p>{person}</p>
      <button
        onClick={() => setPerson("John")}
        style={{
          backgroundColor: person === "John" ? "red" : "",
        }}
      >
        Choose John
      </button>
      <button
        onClick={() => setPerson("Jane")}
        style={{
          backgroundColor: person === "Jane" ? "red" : "",
        }}
      >
        Choose Jane
      </button>
    </div>
  );
};

// setState with a callback function
export const Button = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <button onClick={handleClick}>Clicked {count}</button>
  );
};
