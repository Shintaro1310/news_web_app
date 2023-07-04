import { Inter } from "next/font/google";

import Loading from "@/component/Loading";

import { useRecoilValueLoadable } from "recoil";
import { fetchTechnologyNewsListState } from "@/network/genre/technology/client";
import { NewsCard } from "@/component/NewsCard";
import { Header } from "@/component/Header";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const topNewsList = useRecoilValueLoadable(fetchTechnologyNewsListState)
  switch (topNewsList.state) {
    case "hasError":
      throw topNewsList.contents;
    case "loading":
      return <div><Loading></Loading></div>;
    case "hasValue":
      return (
        <main>
          <div>
            <Header></Header>
            <div className="flex flex-row ">
            <div className="space-y-2">
            <br></br>
            {topNewsList.contents.map((topNews) => (
              <div key={topNews.source.id}>
                <NewsCard
                  image={topNews.urlToImage!}
                  title={topNews.title}
                  publishedAt={topNews.publishedAt}
                  url={topNews.url}
                  author={topNews.author}
                ></NewsCard>
              </div>
            ))}
            </div>
            </div>
          </div>
        </main>
      );
  }
}