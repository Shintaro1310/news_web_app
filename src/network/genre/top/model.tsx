export interface NewsList {
    status: string;
    totalResults: number;
    articles: NewsListArticle[];
}

export interface NewsListArticle {
    source: NewsListSource;
    author: null | string;
    title: string;
    description: null | string;
    url: string;
    urlToImage: null | string;
    publishedAt: string;
    content: null | string;
}

export interface NewsListSource {
    id: null;
    name: string;
}