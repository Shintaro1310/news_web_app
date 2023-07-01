export interface HealthNewsList {
    status: string;
    totalResults: number;
    articles: HealthArticleNewsList[];
  }
  
  export interface HealthArticleNewsList {
    source: HealthSourceNewsList;
    author: null | string;
    title: string;
    description: null | string;
    url: string;
    urlToImage: null | string;
    publishedAt: string;
    content: null | string;
  }
  
  export interface HealthSourceNewsList {
    id: null | string;
    name: string;
  }
  