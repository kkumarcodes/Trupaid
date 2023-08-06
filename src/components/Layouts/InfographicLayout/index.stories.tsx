import React from "react";
import { Story, Meta } from "@storybook/react";

import InfographicLayout, { Props } from "./index";
import onboardingImage from "../../../assets/images/branding/onboarding.png";

export default {
  title: "Layout/InfographicLayout",
  component: InfographicLayout,
} as Meta;

const Template: Story<Props> = (args) => <InfographicLayout {...args} />;

export const Default = Template.bind({});
Default.args = {
  infographicProps: {
    imgSrc: onboardingImage,
    title: "Horizontal Carousel Item Title",
    info: "Split bills like rent and electric without effort or reminders.",
  },
};

export const Slides = Template.bind({});
Slides.args = {
  MobileTitleContent: <h2>Custom MobileTitle</h2>,
  infographicSlides: [
    {
      imgSrc: onboardingImage,
      title: "Horizontal Carousel Item Title1",
      info: "Split bills like rent and electric without effort or reminders.",
    },
    {
      imgSrc: onboardingImage,
      title: "Horizontal Carousel Item Title2",
      info: "Split bills like rent and electric without effort or reminders.",
    },
  ],
};
