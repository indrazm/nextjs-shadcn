import { Meta } from '@storybook/react';

import { Input } from '.';

const meta: Meta = {
  component: Input,
  title: 'Components/Input',
};

export default meta;

export const Large = () => <Input size="lg" placeholder="Enter your input" />;
export const Medium = () => <Input size="md" placeholder="Enter your input" />;
export const Small = () => <Input size="sm" placeholder="Enter your input" />;
