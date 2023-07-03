import axios from "axios";
import { TechnologyArticleNewsList } from "./model";
import { atom, selector } from "recoil";

export const fetchTechnologyNewsListState = atom({
  key:"fetchTechnologyNewsList",
  default:selector({
    key:"fetchTechnologyNewsListSelector",
    get:async({})=>{
    try{
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=jp&category=technology&apiKey=0849363c5d7343f48aa60aadc2f0f8c5"
      );
      const fetchedTechnologyNewsListArticle: TechnologyArticleNewsList[] = Array.isArray(
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
      return fetchedTechnologyNewsListArticle
    }catch(e){
        throw e;
      }
    }
  })
})