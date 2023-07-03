import axios from "axios";
import { NewsList, NewsListArticle, NewsListSource } from "./model";
import { atom, selector } from "recoil";

export const fetchNewsListState = atom({
  key:"fetchNewsList",
  default:selector({
    key:"fetchNewsListSelector",
    get:async({})=>{
    try{
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=jp&pageSize=100&apiKey=0849363c5d7343f48aa60aadc2f0f8c5"
      );
      const fetchedNewsListArticle: NewsListArticle[] = Array.isArray(
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
      return fetchedNewsListArticle
    }catch(e){
        throw e;
      }
    }
  })
})