import axios from "axios";

import { atom, selector } from "recoil";
import { BusinessArticleNewsList } from "./model";




export const fetchBusinessNewsListState = atom({
  key:"fetchBusinessNewsList",
  default:selector({
    key:"fetchBusinessNewsListSelector",
    get:async({})=>{
    try{
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=0849363c5d7343f48aa60aadc2f0f8c5"
      );
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
      return fetchedBusinessNewsListArticle
    }catch(e){
        throw e;
      }
    }
  })
})