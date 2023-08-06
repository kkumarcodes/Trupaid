import OnBoardNavbar, { Props } from "./index";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Components/OnBoardingNavbar",
  component: OnBoardNavbar,
} as Meta;

const Template: Story<Props> = (args) => <OnBoardNavbar {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Sign Up",
  logoHeight: 50,
  logoWidth: 30,
  backEnabled: true,
  viewBox: "0 0 30 30",
  mobileLogoHeight: 24,
  mobileLogoWidth: 110,
  mobileLogoViewBox: "0 0 103 24",
  navbarMobileLayoutUpdate: true,
  showTotalCost: true,
  totalCost: "1,573.00",
};
