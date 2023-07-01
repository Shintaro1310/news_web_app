import axios from "axios";
import { NewsList, NewsListArticle, NewsListSource } from "../newsList/model";
import { BusinessArticleNewsList, BusinessNewsList, BusinessSourceNewsList } from "./model";

interface BusinessNewsListState {
    setBusinessNewsList: (BusinessNewsList: BusinessNewsList | null) => void;
    setBusinessNewsListArticle: (BusinessNewsListArticle: BusinessArticleNewsList[]) => void;
    setBusinessNewsListSource: (BusinessNewsListSource: BusinessSourceNewsList | null) => void;
    setBusinessIsLoading:(BusinessIsLoading:boolean)=>void
  }

  export const fetchBusinessNewsList = async ({
    setBusinessNewsList,
    setBusinessNewsListArticle,
    setBusinessNewsListSource,
    setBusinessIsLoading
  }: BusinessNewsListState) => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=0849363c5d7343f48aa60aadc2f0f8c5"
      );
      const fetchedBusinessNewsList: BusinessNewsList = {
        status: response.data.status,
        totalResults: response.data.totalResults,
        articles: response.data.articles,
      };
  
      const fetchedBusinessNewsListArticle: BusinessArticleNewsList[] = Array.isArray(
        response.data.articles
      )
        ? response.data.articles.map((article: any) => ({
            source: article.source,
            author: article.author,
            title: article.title,
            description: article.description,
            url: article.url,
            urlToImage: article.urlToImage,
            publishedAt: article.publishedAt,
            content: article.content,
          }))
        : [];
  
      const fetchedBusinessNewsListSource: BusinessSourceNewsList = {
        id: null,
        name: "",
      };
      await setBusinessNewsList(fetchedBusinessNewsList);
      await setBusinessNewsListArticle(fetchedBusinessNewsListArticle);
      await  setBusinessNewsListSource(fetchedBusinessNewsListSource);
      setBusinessIsLoading(false);
    } catch (error) {
      console.log("エラー", error);
    }
  };