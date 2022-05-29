import React, { ReactNode } from "react";
import "./MyButton.css";
export interface MyButtonProps {
    children: ReactNode;
    color: string;
    big?: boolean;
}
declare const MyButton: React.FC<MyButtonProps>;
export default MyButton;
