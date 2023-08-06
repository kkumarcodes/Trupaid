import React from 'react';
import { Story, Meta } from '@storybook/react';

import Link, { Props } from './index';

export default {
  title: 'Components/Link',
  component: Link,
} as Meta;

const Template: Story<Props> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <>Link</>
};
