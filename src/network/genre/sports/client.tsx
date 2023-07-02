import axios from "axios";
import { NewsList, NewsListArticle, NewsListSource } from "../top/model";
import { SportsArticleNewsList, SportsNewsList, SportsSourceNewsList } from "./model";

interface SportsNewsListState {
    setSportsNewsList: (sportsNewsList: SportsNewsList | null) => void;
    setSportsNewsListArticle: (sportsNewsListArticle: SportsArticleNewsList[]) => void;
    setSportsNewsListSource: (sportsNewsListSource: SportsSourceNewsList | null) => void;
    setSportsIsLoading: (sportsIsLoading: boolean) => void;
}

export const fetchSportsNewsList = async ({
    setSportsNewsList,
    setSportsNewsListArticle,
    setSportsNewsListSource,
    setSportsIsLoading
}: SportsNewsListState) => {
    try {
        const response = await axios.get(
            "https://newsapi.org/v2/top-headlines?country=jp&category=sports&apiKey=0849363c5d7343f48aa60aadc2f0f8c5"
        );
        const fetchedSportsNewsList: SportsNewsList = {
            status: response.data.status,
            totalResults: response.data.totalResults,
            articles: response.data.articles,
        };

        const fetchedSportsNewsListArticle: SportsArticleNewsList[] = Array.isArray(
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

        const fetchedSportsNewsListSource: SportsSourceNewsList = {
            id: null,
            name: "",
        };
        await setSportsNewsList(fetchedSportsNewsList);
        await setSportsNewsListArticle(fetchedSportsNewsListArticle);
        await setSportsNewsListSource(fetchedSportsNewsListSource);
        setSportsIsLoading(false);
    } catch (error) {
        console.log("エラー", error);
    }
};
