import React, { ReactNode } from "react";

import "./MyInput.css";

export interface MyInputProps {
  big?: boolean;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
}

const MyInput: React.FC<MyInputProps> = (props) => {
  const classes = ["MyInput"];

  if (props.big) {
    classes.push("big");
  }
  return (
    <label>
      {props.label}
      <input className={classes.join(" ")} defaultValue={props.defaultValue} />
    </label>
  );
};

export default MyInput;
