import React from "react";
import "./MyInput.css";
export interface MyInputProps {
    big?: boolean;
    label?: string;
    placeholder?: string;
    defaultValue?: string;
}
declare const MyInput: React.FC<MyInputProps>;
export default MyInput;
