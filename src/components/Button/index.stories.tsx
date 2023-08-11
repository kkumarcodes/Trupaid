import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button, { Props } from './index';

export default {
  title: '../Button',
  component: Button,
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Press me'
};
