import axios from "axios";

import { atom, selector } from "recoil";
import { ScienceArticleNewsList } from "./model";

export const fetchScienceNewsListState = atom({
  key:"fetchScienceNewsList",
  default:selector({
    key:"fetchScienceNewsListSelector",
    get:async({})=>{
    try{
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=jp&category=science&apiKey=0849363c5d7343f48aa60aadc2f0f8c5"
      );
      const fetchedScienceNewsListArticle: ScienceArticleNewsList[] = Array.isArray(
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
      return fetchedScienceNewsListArticle
    }catch(e){
        throw e;
      }
    }
  })
})