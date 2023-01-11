import React from "react";

// This is a component
export const Button = () => {
  return <button>Click me</button>;
};

// You can use your component like this
export const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <Button />
    </div>
  );
};

// JSX
export const Paragraph = () => {
  return (
    <div>
      <p className="paragraph">This is a paragraph</p>
    </div>
  );
};

// If your component only return JSX you can shorten arrow function
export const MyParagraph = () => (
  <div>
    <p className="paragraph">This is a paragraph</p>
  </div>
);

// JSX is just a synthetic sugar for React.createElement
export const ParagraphAsCreateElement = () => {
  return React.createElement(
    "div",
    null,
    React.createElement("p", { className: "paragraph" }, "This is a paragraph")
  );
};

// React fragment
export const Section = () => {
  return (
    <>
      <p>Lorem ipsum</p>
      <p>dolor sit amet</p>
    </>
  );
};

// Variables in JSX
export const UserProfile = () => {
  const name = "John";
  const image = "https://picsum.photos/100";

  return (
    <div>
      <p className="user">{name}</p>
      <img src={image} alt={`Avatar of user ${name}`} />
    </div>
  );
};

// Conditionals
export const LoadingParagraph = () => {
  const isLoading = true;
  const content = "Hello world";

  return (
    <div>
      {content && <p className="paragraph">{content}</p>}
      {isLoading ? <p>Loading...</p> : <p>Our great page was loaded</p>}
    </div>
  );
};

// Lists
const cars = [
  { id: 1, brand: "BMW", model: "M3" },
  { id: 2, brand: "Mercedes", model: "C63" },
  { id: 3, brand: "Audi", model: "RS6" },
];

export const CarsList = () => {
  return (
    <ul>
      {cars.map((car) => (
        <li key={car.id}>
          <p>
            {car.brand} {car.model}
          </p>
        </li>
      ))}
    </ul>
  );
};

// Events
export const MyButton = () => {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return <button onClick={handleClick}>Click me</button>;
};
