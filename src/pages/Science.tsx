import Header from "@/component/Header";
import Loading from "@/component/Loading";
import NewsCard from "@/component/NewsCard";
import { fetchScienceNewsList } from "@/network/genre/science/client";

import { ScienceArticleNewsList, ScienceNewsList, ScienceSourceNewsList } from "@/network/genre/science/model"; // Scienceの関連するモデルからのインポート
import { useEffect, useState } from "react";

export default function Science() {
    const [newsList, setScienceNewsList] = useState<ScienceNewsList | null>(null);
    const [newsListArticle, setScienceNewsListArticle] = useState<ScienceArticleNewsList[]>([]);
    const [newsListSource, setScienceNewsListSource] = useState<ScienceSourceNewsList | null>(null);
    const [isLoading, setScienceIsLoading] = useState(true);

    useEffect(() => {
        fetchScienceNewsList({ setScienceNewsList, setScienceNewsListArticle, setScienceNewsListSource, setScienceIsLoading });
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
                            <NewsCard image={article.urlToImage!} title={article.title} publishedAt={article.publishedAt} url={article.url} author={article.author}></NewsCard>
                        ))}
                    </div>
                </div>
            )}
        </main>
    );
}
