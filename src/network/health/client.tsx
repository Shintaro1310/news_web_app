import axios from "axios";
import { NewsList, NewsListArticle, NewsListSource } from "../newsList/model";
import { HealthNewsList, HealthArticleNewsList, HealthSourceNewsList } from "./model";

interface HealthNewsListState {
  setHealthNewsList: (healthNewsList: HealthNewsList | null) => void;
  setHealthNewsListArticle: (healthNewsListArticle: HealthArticleNewsList[]) => void;
  setHealthNewsListSource: (healthNewsListSource: HealthSourceNewsList | null) => void;
  setHealthIsLoading: (healthIsLoading: boolean) => void;
}

export const fetchHealthNewsList = async ({
  setHealthNewsList,
  setHealthNewsListArticle,
  setHealthNewsListSource,
  setHealthIsLoading
}: HealthNewsListState) => {
  try {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=jp&category=health&apiKey=0849363c5d7343f48aa60aadc2f0f8c5"
    );
    const fetchedHealthNewsList: HealthNewsList = {
      status: response.data.status,
      totalResults: response.data.totalResults,
      articles: response.data.articles
    };

    const fetchedHealthNewsListArticle: HealthArticleNewsList[] = Array.isArray(response.data.articles)
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

    const fetchedHealthNewsListSource: HealthSourceNewsList = {
      id: null,
      name: ""
    };
    await setHealthNewsList(fetchedHealthNewsList);
    await setHealthNewsListArticle(fetchedHealthNewsListArticle);
    await setHealthNewsListSource(fetchedHealthNewsListSource);
    setHealthIsLoading(false);
  } catch (error) {
    console.log("エラー", error);
  }
};
