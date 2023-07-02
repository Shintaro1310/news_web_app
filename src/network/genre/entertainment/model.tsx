export interface EntertainmentNewsList {
    status: string;
    totalResults: number;
    articles: EntertainmentArticleNewsList[];
}

export interface EntertainmentArticleNewsList {
    source: EntertainmentSourceNewsList;
    author: null | string;
    title: string;
    description: null | string;
    url: string;
    urlToImage: null | string;
    publishedAt: string;
    content: null | string;
}

export interface EntertainmentSourceNewsList {
    id: null | string;
    name: string;
}