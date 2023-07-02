import axios from "axios";
import { NewsList, NewsListArticle, NewsListSource } from "../top/model";
import { TechnologyNewsList, TechnologyArticleNewsList, TechnologySourceNewsList } from "./model";


interface TechnologyNewsListState {
    setTechnologyNewsList: (technologyNewsList: TechnologyNewsList | null) => void;
    setTechnologyNewsListArticle: (technologyNewsListArticle: TechnologyArticleNewsList[]) => void;
    setTechnologyNewsListSource: (technologyNewsListSource: TechnologySourceNewsList | null) => void;
    setTechnologyIsLoading: (technologyIsLoading: boolean) => void;
}

export const fetchTechnologyNewsList = async ({
    setTechnologyNewsList,
    setTechnologyNewsListArticle,
    setTechnologyNewsListSource,
    setTechnologyIsLoading
}: TechnologyNewsListState) => {
    try {
        const response = await axios.get(
            "https://newsapi.org/v2/top-headlines?country=jp&category=technology&apiKey=0849363c5d7343f48aa60aadc2f0f8c5"
        );
        const fetchedTechnologyNewsList: TechnologyNewsList = {
            status: response.data.status,
            totalResults: response.data.totalResults,
            articles: response.data.articles
        };

        const fetchedTechnologyNewsListArticle: TechnologyArticleNewsList[] = Array.isArray(response.data.articles)
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

        const fetchedTechnologyNewsListSource: TechnologySourceNewsList = {
            id: null,
            name: ""
        };
        await setTechnologyNewsList(fetchedTechnologyNewsList);
        await setTechnologyNewsListArticle(fetchedTechnologyNewsListArticle);
        await setTechnologyNewsListSource(fetchedTechnologyNewsListSource);
        setTechnologyIsLoading(false);
    } catch (error) {
        console.log("エラー", error);
    }
};
