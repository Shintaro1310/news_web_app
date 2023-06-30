import type { Meta, StoryObj } from '@storybook/react';
import { title } from 'process';
import Loading from '.';


const meta: Meta<typeof Loading> = {
    title: 'Common/Loading',
    component: Loading,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Loading>;

export const Default: Story = {
    args: {

    },
};