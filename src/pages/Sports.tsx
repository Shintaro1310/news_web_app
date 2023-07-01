import Header from "@/component/Header";
import Loading from "@/component/Loading";
import NewsCard from "@/component/NewsCard";
import { fetchSportsNewsList } from "@/network/sports/client";
import { SportsArticleNewsList, SportsNewsList, SportsSourceNewsList } from "@/network/sports/model";
import { useEffect, useState } from "react";

export default function Sports() {
    const [newsList, setSportsNewsList] = useState<SportsNewsList | null>(null);
    const [newsListArticle, setSportsNewsListArticle] = useState<SportsArticleNewsList[]>([]);
    const [newsListSource, setSportsNewsListSource] = useState<SportsSourceNewsList | null>(null);
    const [isLoading, setSportsIsLoading] = useState(true);
  
    useEffect(() => {
      fetchSportsNewsList({ setSportsNewsList, setSportsNewsListArticle, setSportsNewsListSource, setSportsIsLoading });
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
