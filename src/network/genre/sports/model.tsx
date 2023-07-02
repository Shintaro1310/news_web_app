export interface SportsNewsList {
    status: string;
    totalResults: number;
    articles: SportsArticleNewsList[];
}

export interface SportsArticleNewsList {
    source: SportsSourceNewsList;
    author: null | string;
    title: string;
    description: null | string;
    url: string;
    urlToImage: null | string;
    publishedAt: string;
    content: null | string;
}

export interface SportsSourceNewsList {
    id: null | string;
    name: string;
}
