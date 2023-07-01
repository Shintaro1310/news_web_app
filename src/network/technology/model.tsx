export interface TechnologyNewsList {
    status: string;
    totalResults: number;
    articles: TechnologyArticleNewsList[];
  }
  
  export interface TechnologyArticleNewsList {
    source: TechnologySourceNewsList;
    author: null | string;
    title: string;
    description: null | string;
    url: string;
    urlToImage: null | string;
    publishedAt: string;
    content: null | string;
  }
  
  export interface TechnologySourceNewsList {
    id: null | string;
    name: string;
  }
  