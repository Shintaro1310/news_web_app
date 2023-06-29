import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { NewsList, NewsListArticle, NewsListSource } from "@/network/newsList/model";
import { fetchNewsList } from "@/network/newsList/client";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [newsList, setNewsList] = useState<NewsList | null>(null);
  const [newsListArticle, setNewsListArticle] = useState<NewsListArticle[]>([]);
  const [newsListSource, setNewsListSource] = useState<NewsListSource | null>(null);
  useEffect(() => {
    fetchNewsList({ setNewsList, setNewsListArticle, setNewsListSource });
  }, []);

  return (
    <main>
      <div>
      {newsListArticle.map((article) => (
            <li key={article.source.id}>
              <h2>{article.title}</h2>
            </li>
          ))}
      </div>
    </main>
  );
}