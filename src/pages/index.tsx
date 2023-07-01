import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { NewsList, NewsListArticle, NewsListSource } from "@/network/newsList/model";
import { fetchNewsList } from "@/network/newsList/client";
import NewsCard from "@/component/NewsCard";
import Loading from "@/component/Loading";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [newsList, setNewsList] = useState<NewsList | null>(null);
  const [newsListArticle, setNewsListArticle] = useState<NewsListArticle[]>([]);
  const [newsListSource, setNewsListSource] = useState<NewsListSource | null>(null);
  const [isLoading,setIsLoading] =useState(true)

  useEffect(() => {
    fetchNewsList({ setNewsList, setNewsListArticle, setNewsListSource ,setIsLoading});
  }, []);

  return (
    <main>
      <div className="space-y-4">
        <br></br>
        {
           isLoading? <Loading></Loading>:
            newsListArticle.map((article) => (
    
           <NewsCard  image={article.urlToImage!} title={article.title} publishedAt={article.publishedAt}></NewsCard>
              
             ))
        }
      </div>
    </main>
  );
}