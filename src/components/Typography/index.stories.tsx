import React from 'react';
import { Story, Meta } from '@storybook/react';

import Typography, { Props } from './index';

export default {
  title: 'Components/Typography',
  component: Typography,
} as Meta;

const Template: Story<Props> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <>Hello!</>
};
