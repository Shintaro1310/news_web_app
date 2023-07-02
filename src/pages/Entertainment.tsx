import Header from "@/component/Header";
import Loading from "@/component/Loading";
import NewsCard from "@/component/NewsCard";
import { fetchBusinessNewsList } from "@/network/genre/business/client";
import { fetchEntertainmentNewsList } from "@/network/genre/entertainment/client";
import { EntertainmentArticleNewsList, EntertainmentNewsList, EntertainmentSourceNewsList } from "@/network/genre/entertainment/model";
import { useEffect, useState } from "react";

export default function Entertainment() {
    const [newsList, setEntertainmentNewsList] = useState<EntertainmentNewsList | null>(null);
    const [newsListArticle, setEntertainmentNewsListArticle] = useState<EntertainmentArticleNewsList[]>([]);
    const [newsListSource, setEntertainmentNewsListSource] = useState<EntertainmentSourceNewsList | null>(null);
    const [isLoading, setEntertainmentIsLoading] = useState(true)

    useEffect(() => {
        fetchEntertainmentNewsList({ setEntertainmentNewsList, setEntertainmentNewsListArticle, setEntertainmentNewsListSource, setEntertainmentIsLoading });
    }, []);

    return (
        <main>
            {isLoading ? <Loading></Loading> : <div>
                <Header></Header>
                <div className="space-y-4">
                    <br></br>
                    {

                        newsListArticle.map((article) => (

                            <NewsCard image={article.urlToImage!} title={article.title} publishedAt={article.publishedAt} url={article.url} author={article.author}></NewsCard>

                        ))
                    }
                </div>

            </div>}

        </main>
    );
}