import Header from "@/component/Header";
import Loading from "@/component/Loading";
import NewsCard from "@/component/NewsCard";
import { fetchTechnologyNewsList } from "@/network/genre/technology/client";
import { TechnologyArticleNewsList, TechnologyNewsList, TechnologySourceNewsList } from "@/network/genre/technology/model";
import { useEffect, useState } from "react";

export default function Technology() {
    const [newsList, setTechnologyNewsList] = useState<TechnologyNewsList | null>(null);
    const [newsListArticle, setTechnologyNewsListArticle] = useState<TechnologyArticleNewsList[]>([]);
    const [newsListSource, setTechnologyNewsListSource] = useState<TechnologySourceNewsList | null>(null);
    const [isLoading, setTechnologyIsLoading] = useState(true);

    useEffect(() => {
        fetchTechnologyNewsList({ setTechnologyNewsList, setTechnologyNewsListArticle, setTechnologyNewsListSource, setTechnologyIsLoading });
    }, []);

    return (
        <main>
            {isLoading ? (
                <Loading />
            ) : (
                <div>
                    <Header />
                    <div className="space-y-4">
                        <br />
                        {newsListArticle.map((article) => (
                            <NewsCard
                                image={article.urlToImage!}
                                title={article.title}
                                publishedAt={article.publishedAt}
                                url={article.url}
                                author={article.author}
                            />
                        ))}
                    </div>
                </div>
            )}
        </main>
    );
}
