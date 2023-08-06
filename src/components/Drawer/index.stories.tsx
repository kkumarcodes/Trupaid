import { Story, Meta } from "@storybook/react";
import AppDrawer, { Props } from "./index";
import StoryRouter from "storybook-react-router";

export default {
  title: "Components/AppDrawer",
  component: AppDrawer,
  decorators: [StoryRouter()],
} as Meta;

const Template: Story<Props> = (args) => <AppDrawer {...args}></AppDrawer>;

export const Default = Template.bind({});

Default.args = {
  routes: [
    {
      name: "Home",
      route: "/ddd",
      icon: "DrawHomeIcon",
    },
    {
      name: "Transfer",
      route: "/transfer",
      icon: "DrawTransferIcon",
    },
    {
      name: "Expenses",
      route: "/expenses",
      icon: "DrawExpensesIcon",
    },
    {
      name: "Activity",
      route: "/Activity",
      icon: "DrawActivityIcon",
    },
    {
      name: "Connect",
      route: "/connect",
      icon: "DrawConnectIcon",
    },
    {
      name: "Accounts",
      route: "/accounts",
      icon: "DrawAccountsIcon",
    },
    {
      name: "Settings",
      route: "/settings",
      icon: "DrawSettingsIcon",
    },
  ],
};
