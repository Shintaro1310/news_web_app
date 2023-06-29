import axios from "axios";
import { NewsList, NewsListArticle, NewsListSource } from "./model";

interface NewsListState{
    setNewsList:({})=>void
    setNewsListArticle:([])=>void
    setNewsListSource:({})=>void
}

export const fetchNewsList = async({setNewsList,setNewsListArticle,setNewsListSource}:NewsListState)=>{

    try{
        const response = await axios.get("https://newsapi.org/v2/top-headlines?country=jp&pageSize=100&apiKey=0849363c5d7343f48aa60aadc2f0f8c5")
        const fetchedNewsList:NewsList={
            status: response.data.status,
            totalResults: response.data.totalResults,
            articles: response.data.articles,
        }

        const fetchedNewsListArticle: NewsListArticle[] = Array.isArray(response.data.article)
        ? response.data.article.map((article: any) => ({
            source:      article.source,
            author:      article.author,
            title:       article.title,
            description: article.description,
            url:         article.url,
            urlToImage:  article.urlToImage,
            publishedAt: article.publishedAt,
            content:     article.content,

        }  ))
         : [];

        const fetchedNewsListSource:NewsListSource={
            id: response.data.id,
            name: response.data.name,
        }
        setNewsList(fetchedNewsList)
        setNewsListArticle(fetchedNewsListArticle)
        setNewsListSource(fetchedNewsListSource)






    }catch(error){
        console.log("エラー",error);
    }




}