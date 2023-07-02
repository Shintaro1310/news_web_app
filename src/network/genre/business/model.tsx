export interface BusinessNewsList {
    status: string;
    totalResults: number;
    articles: BusinessArticleNewsList[];
}

export interface BusinessArticleNewsList {
    source: BusinessSourceNewsList;
    author: null | string;
    title: string;
    description: null | string;
    url: string;
    urlToImage: null | string;
    publishedAt: string;
    content: null | string;
}

export interface BusinessSourceNewsList {
    id: null | string;
    name: string;
}