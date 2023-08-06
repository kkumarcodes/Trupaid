import BillSplitAccordion, { Props } from "./index";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import Details from "./Details";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Components/BillSplitAccordion",
  component: BillSplitAccordion,
} as Meta;

const Template: Story<Props> = (args) => <BillSplitAccordion {...args} />;

export const Default = Template.bind({});

Default.args = {
  LeftContent: (
    <LeftContent
      title="Hulu"
      subTitle="recurring bill split"
      description="Pay 33% to Lightning M"
    />
  ),
  RightContent: (
    <RightContent billAmount="25.25" billStatus="Paid on May 1st" />
  ),
  Details: (
    <Details
      billTitle="The Bill"
      billFrequency="Monthly (Apr 30th est)"
      billEstimation="59.99"
      transferTitle="Transfer"
      transferDescription="Recurring monthly"
      transferEstimation="20.00"
    />
  ),
  title: "Hulu",
  category: "",
  showRightContent: false,
};
