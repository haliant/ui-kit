import React, { ReactNode } from "react";

import "./MyButton.css";

export interface MyButtonProps {
  children: ReactNode;
  color: string;
  big?: boolean;
}

const MyButton: React.FC<MyButtonProps> = ({ children, ...restProps }) => {
  const classes = ["MyButton"];

  if (restProps.big) {
    classes.push("big");
  }
  return (
    <button className={classes.join(" ")} {...restProps}>
      {children}
    </button>
  );
};

export default MyButton;
