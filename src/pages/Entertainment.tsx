import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { NewsList, NewsListArticle, NewsListSource } from "@/network/genre/top/model";
import NewsCard from "@/component/NewsCard";
import Loading from "@/component/Loading";
import Header from "@/component/Header";
import { ChanceOfRain, Copyright, Description, Detail, Forecast, Max, Provider, Temperature, Weather, WeatherImage } from "@/network/weather/model";
import WeatherCard from "@/component/TemperatureCard";
import { fetchWeather } from "@/network/weather/client";
import { useRecoilValueLoadable } from "recoil";
import { fetchNewsListState } from "@/network/genre/top/client";
import { fetchTechnologyNewsListState } from "@/network/genre/technology/client";
import { fetchEntertainmentNewsListState } from "@/network/genre/entertainment/client";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const topNewsList = useRecoilValueLoadable(fetchEntertainmentNewsListState)
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
              <div>
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