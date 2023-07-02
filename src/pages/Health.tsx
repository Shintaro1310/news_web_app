import Header from "@/component/Header";
import Loading from "@/component/Loading";
import NewsCard from "@/component/NewsCard";
import { fetchHealthNewsList } from "@/network/genre/health/client";
import { HealthArticleNewsList, HealthNewsList, HealthSourceNewsList } from "@/network/genre/health/model";
import { useEffect, useState } from "react";

export default function Health() {
    const [newsList, setHealthNewsList] = useState<HealthNewsList | null>(null);
    const [newsListArticle, setHealthNewsListArticle] = useState<HealthArticleNewsList[]>([]);
    const [newsListSource, setHealthNewsListSource] = useState<HealthSourceNewsList | null>(null);
    const [isLoading, setHealthIsLoading] = useState(true);

    useEffect(() => {
        fetchHealthNewsList({ setHealthNewsList, setHealthNewsListArticle, setHealthNewsListSource, setHealthIsLoading });
    }, []);

    return (
        <main>
            {isLoading ? (
                <Loading></Loading>
            ) : (
                <div>
                    <Header></Header>
                    <div className="space-y-4">
                        <br></br>
                        {newsListArticle.map((article) => (
                            <NewsCard
                                image={article.urlToImage!}
                                title={article.title}
                                publishedAt={article.publishedAt}
                                url={article.url}
                                author={article.author}
                            ></NewsCard>
                        ))}
                    </div>
                </div>
            )}
        </main>
    );
}
