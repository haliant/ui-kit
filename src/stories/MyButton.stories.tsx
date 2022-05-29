import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MyButton from "../MyButton/MyButton";

export default {
  title: "Example/Button",
  component: MyButton,
} as ComponentMeta<typeof MyButton>;

const Template: ComponentStory<typeof MyButton> = (args) => (
  <MyButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  color: "blue",
  children: "Some Text",
};

export const Danger = Template.bind({});
Danger.args = {
  color: "red",
  children: "Some Text",
};
