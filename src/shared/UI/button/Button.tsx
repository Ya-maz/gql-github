import { ReactNode } from "react";

import "./Button.css";

type TProps = {
  onClick: () => void;
  children?: ReactNode;
};

export const Button = ({ onClick, children }: TProps) => (
  <button onClick={onClick}>{children ? children : null}</button>
);
