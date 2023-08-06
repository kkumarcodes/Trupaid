import React from "react";
import { Story, Meta } from "@storybook/react";

import Banner, { Props } from "./index";

export default {
  title: "Components/Banner",
  component: Banner,
} as Meta;

const Template: Story<Props> = (args) => <Banner {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Uh oh! ☹️  Seems like one of your credentials were invalid. Please try again!",
  anchorOrigin: { vertical: "top", horizontal: "center" },
  severity: "error",
};
