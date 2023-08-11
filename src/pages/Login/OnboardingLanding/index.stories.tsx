import React from 'react';
import { Story, Meta } from '@storybook/react';

import SocialButton, { Props } from './SocialButton';

import GoogleIcon from 'assets/images/others/googleicon.png';

export default {
  title: 'Components/SocialButton',
  component: SocialButton,
} as Meta;

const Template: Story<Props> = (args) => <SocialButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Press me',
  buttonIcon: GoogleIcon,
  color: 'white',
  buttonText: 'Continue with Apple',
};
