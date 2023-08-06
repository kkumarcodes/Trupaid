import React from "react";
import { Story, Meta } from "@storybook/react";
import Input, { Props } from "./index";

export default {
  title: "Components/Input",
  component: Input,
} as Meta;

const Template: Story<Props> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Email...",
  type: "email",
  errorMessage: "This field is required!",
  disableUnderline: true,
  inputLabel: "Email",
};
