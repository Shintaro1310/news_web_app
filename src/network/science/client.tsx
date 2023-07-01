import axios from "axios";
import { NewsList, NewsListArticle, NewsListSource } from "../newsList/model";
import { ScienceNewsList, ScienceArticleNewsList, ScienceSourceNewsList } from "./model";


interface ScienceNewsListState {
  setScienceNewsList: (scienceNewsList: ScienceNewsList | null) => void;
  setScienceNewsListArticle: (scienceNewsListArticle: ScienceArticleNewsList[]) => void;
  setScienceNewsListSource: (scienceNewsListSource: ScienceSourceNewsList | null) => void;
  setScienceIsLoading: (scienceIsLoading: boolean) => void;
}

export const fetchScienceNewsList = async ({
  setScienceNewsList,
  setScienceNewsListArticle,
  setScienceNewsListSource,
  setScienceIsLoading
}: ScienceNewsListState) => {
  try {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=jp&category=science&apiKey=0849363c5d7343f48aa60aadc2f0f8c5"
    );
    const fetchedScienceNewsList: ScienceNewsList = {
      status: response.data.status,
      totalResults: response.data.totalResults,
      articles: response.data.articles
    };

    const fetchedScienceNewsListArticle: ScienceArticleNewsList[] = Array.isArray(response.data.articles)
      ? response.data.articles.map((article: any) => ({
          source: article.source,
          author: article.author,
          title: article.title,
          description: article.description,
          url: article.url,
          urlToImage: article.urlToImage,
          publishedAt: article.publishedAt,
          content: article.content
        }))
      : [];

    const fetchedScienceNewsListSource: ScienceSourceNewsList = {
      id: null,
      name: ""
    };
    await setScienceNewsList(fetchedScienceNewsList);
    await setScienceNewsListArticle(fetchedScienceNewsListArticle);
    await setScienceNewsListSource(fetchedScienceNewsListSource);
    setScienceIsLoading(false);
  } catch (error) {
    console.log("エラー", error);
  }
};
