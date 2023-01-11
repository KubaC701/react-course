import { ReactNode } from "react";

interface WelcomeHeadingProps {
  name: string;
  greetings?: string;
}

export const WelcomeHeading = ({
  name,
  greetings,
}: WelcomeHeadingProps): JSX.Element => {
  return (
    <>
      <h1>Welcome {name}</h1>
      {greetings && <p>{greetings}</p>}
    </>
  );
};

interface ButtonProps {
  children: ReactNode;
}

export const Button = ({
  children,
}: ButtonProps): JSX.Element => {
  return <button>{children}</button>;
};
