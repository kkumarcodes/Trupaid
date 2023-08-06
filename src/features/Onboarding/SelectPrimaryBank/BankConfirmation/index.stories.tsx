import React from 'react';
import { Story, Meta } from '@storybook/react';
import BankConfirmation, { Props } from './index';
import bankAvartar from '../../../../assets/images/profile/bank_avatar.png';

export default {
  title: 'Feature/Onboarding/BankConfirmaation',
  component: BankConfirmation,
} as Meta;

const Template: Story<Props> = (args) => <BankConfirmation {...args} />;

export const Default = Template.bind({});
Default.args = {
  bankName: 'Wells Fargo ...6903',
  accountType: 'Checking',
  avatarUrl: bankAvartar,
  currentBalance: '12806.47',
  primaryState: false,
  errorCallback: 'Something isn’t right with this connection',
};
