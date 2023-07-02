import axios from "axios";
import { NewsList, NewsListArticle, NewsListSource } from "../top/model";
import { EntertainmentArticleNewsList, EntertainmentNewsList, EntertainmentSourceNewsList } from "./model";

interface EntertainmentNewsListState {
    setEntertainmentNewsList: (EntertainmentNewsList: EntertainmentNewsList | null) => void;
    setEntertainmentNewsListArticle: (EntertainmentNewsListArticle: EntertainmentArticleNewsList[]) => void;
    setEntertainmentNewsListSource: (EntertainmentNewsListSource: EntertainmentSourceNewsList | null) => void;
    setEntertainmentIsLoading: (EntertainmentIsLoading: boolean) => void
}

export const fetchEntertainmentNewsList = async ({
    setEntertainmentNewsList,
    setEntertainmentNewsListArticle,
    setEntertainmentNewsListSource,
    setEntertainmentIsLoading
}: EntertainmentNewsListState) => {
    try {
        const response = await axios.get(
            "https://newsapi.org/v2/top-headlines?country=jp&category=entertainment&apiKey=0849363c5d7343f48aa60aadc2f0f8c5"
        );
        const fetchedEntertainmentNewsList: EntertainmentNewsList = {
            status: response.data.status,
            totalResults: response.data.totalResults,
            articles: response.data.articles,
        };

        const fetchedEntertainmentNewsListArticle: EntertainmentArticleNewsList[] = Array.isArray(
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

        const fetchedEntertainmentNewsListSource: EntertainmentSourceNewsList = {
            id: null,
            name: "",
        };
        await setEntertainmentNewsList(fetchedEntertainmentNewsList);
        await setEntertainmentNewsListArticle(fetchedEntertainmentNewsListArticle);
        await setEntertainmentNewsListSource(fetchedEntertainmentNewsListSource);
        setEntertainmentIsLoading(false);
    } catch (error) {
        console.log("エラー", error);
    }
};