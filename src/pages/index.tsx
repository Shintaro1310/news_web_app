import { Inter } from "next/font/google";
import Loading from "@/component/Loading";

import { useRecoilValueLoadable } from "recoil";
import { fetchNewsListState } from "@/network/genre/top/client";
import { WeatherCard } from "@/component/TemperatureCard";
import { fetchWeatherState } from "@/network/weather/client";
import { NewsCard, TopNewsCard } from "@/component/NewsCard";
import { Header } from "@/component/Header";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const topNewsList = useRecoilValueLoadable(fetchNewsListState)
  const weather=useRecoilValueLoadable(fetchWeatherState)



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
            
            <TopNewsCard image1={topNewsList.contents[0].urlToImage!}image2={topNewsList.contents[1].urlToImage!}image3={topNewsList.contents[2].urlToImage!}image4={topNewsList.contents[3].urlToImage!}image5={topNewsList.contents[4].urlToImage!}></TopNewsCard>
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

            <div className="p-14">
              <WeatherCard weather={weather.contents}></WeatherCard>
            </div>
            </div>
          </div>
        </main>
      );
  }
}