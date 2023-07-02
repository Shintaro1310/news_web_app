export interface ScienceNewsList {
    status: string;
    totalResults: number;
    articles: ScienceArticleNewsList[];
}

export interface ScienceArticleNewsList {
    source: ScienceSourceNewsList;
    author: null | string;
    title: string;
    description: null | string;
    url: string;
    urlToImage: null | string;
    publishedAt: string;
    content: null | string;
}

export interface ScienceSourceNewsList {
    id: null | string;
    name: string;
}
