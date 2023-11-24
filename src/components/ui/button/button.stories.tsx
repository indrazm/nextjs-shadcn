import { Meta } from '@storybook/react';

import { Button } from '.';

const meta: Meta = {
  component: Button,
  title: 'Components/Button',
};

export default meta;

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
