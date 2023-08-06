import React from 'react';
import { Story, Meta } from '@storybook/react';
import Checkbox, { Props } from './index'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<Props> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {};