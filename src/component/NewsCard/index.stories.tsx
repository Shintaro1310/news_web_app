import type { Meta, StoryObj } from '@storybook/react';
import NewsCard from '.';
import { title } from 'process';


const meta: Meta<typeof NewsCard> = {
    title: 'Common/NewsCard',
    component: NewsCard,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NewsCard>;

export const Default: Story = {
    args: {
        image: "https://automaton-media.com/wp-content/uploads/2023/06/20230629-253906-header.jpg",
        title: "『ピクミン4』体験版には“Unreal Engine”製との記載あり。任天堂内製作品では珍しくUE採用か - AUTOMATON",
        publishedAt: "2023-06-29T11:44:55Z",

    },
};