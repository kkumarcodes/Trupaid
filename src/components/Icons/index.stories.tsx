import { OnBoardingLogoIcon, Props } from "./index";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Icons/Logo",
  component: OnBoardingLogoIcon,
} as Meta;

const Template: Story<Props> = (args) => <OnBoardingLogoIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  logoHeight: 45,
  logoWidth: 30,
  viewBox: "0 0 30 30",
};
