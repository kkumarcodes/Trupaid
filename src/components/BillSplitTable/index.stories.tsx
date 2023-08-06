import BillSplitTable, { Props } from "./index";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Components/BillSplitTable",
  component: BillSplitTable,
} as Meta;

const Template: Story<Props> = (args) => <BillSplitTable {...args} />;

export const Default = Template.bind({});

Default.args = {
  column: [
    { header: "Description", columnValue: "description" },
    { header: "Frequency", columnValue: "frequency" },
    { header: "Your Share", columnValue: "your_share" },
    { header: "Amount", columnValue: "amount" },
  ],
  userData: [
    {
      description: ["HBO Go", "Next: Apr 27th"],
      frequency: "Monthly",
      share: "33%",
      amount: "10.00",
    },
    {
      description: ["Rent", "Next: Apr 28th"],
      frequency: "Monthly",
      share: "50%",
      amount: "1,500.00",
    },
  ],
};
