import { Story, Meta } from "@storybook/react";

import AppTabs, { Props } from "./index";
import { OnBoardingLogoIcon, OnBoardingLogoIcon2 } from "../Icons";

export default {
  title: "Components/AppTabs",
  component: AppTabs,
  parameters: {
    backgrounds: {
      default: "custome",
      values: [
        { name: "custome", value: "#EEF1FA" },
        { name: "black", value: "#1F1F1F" },
      ],
    },
  },
} as Meta;

const Template: Story<Props> = (args) => <AppTabs {...args}></AppTabs>;

export const Default = Template.bind({});

Default.args = {
  activeName: "Group Activity",
  tabs: [
    {
      name: "Group Activity",
      content: (
        <OnBoardingLogoIcon2
          logoHeight={46}
          logoWidth={197}
          viewBox="0 0 103 24"
        />
      ),
    },
    {
      name: "Personal Account",
      content: (
        <OnBoardingLogoIcon
          logoHeight={50}
          logoWidth={35}
          viewBox="0 0 30 30"
        />
      ),
    },
  ],
  onChangeCb: (newVal: string) => {
    console.log(newVal);
  },
  controls: true,
};
