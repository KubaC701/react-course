// Notice that props are destructured
export const WelcomeHeading = ({ name }) => {
  return <h1>Hello {name}</h1>;
};

<WelcomeHeading name="John" />;

export const Button = ({ children }) => {
  return <button>{children}</button>;
};

<Button>Click me</Button>;

// You can pass as many children as you want
<Button>
  <span>Click me</span>
  <img src="icon.svg" alt="" />
</Button>;
