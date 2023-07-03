import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import NewsCard from "@/component/NewsCard";
import Loading from "@/component/Loading";
import Header from "@/component/Header";
import { ChanceOfRain, Copyright, Description, Detail, Forecast, Max, Provider, Temperature, Weather, WeatherImage } from "@/network/weather/model";
import { fetchWeather } from "@/network/weather/client";
import { useRecoilValueLoadable } from "recoil";
import { fetchNewsListState } from "@/network/genre/top/client";
import { WeatherCard } from "@/component/TemperatureCard";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [copyright, setCopyright] = useState<Copyright[]>([]);
  const [image, setImage] = useState<WeatherImage | null>(null);
  const [Provider, setProvider] = useState<Provider[]>([]);
  const [description, setDescription] = useState<Description | null>(null);
  const [forecast, setForecast] = useState<Forecast[]>([]);
  const [chanceOfRain, setChanceOfRain] = useState<ChanceOfRain | null>(null);
  const [detail, setDetail] = useState<Detail | null>(null);
  const [temperature, setTemperature] = useState<Temperature | null>(null);
  const [max, setMax] = useState<Max | null>(null);
  const [weatherIsLoading, setWeatherIsLoading] = useState(true);
  const topNewsList = useRecoilValueLoadable(fetchNewsListState)

  useEffect(() => {
    fetchWeather({ setWeather, setCopyright, setImage, setProvider, setDescription, setForecast, setChanceOfRain, setDetail, setTemperature, setMax, setWeatherIsLoading })

  }, []);

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
            <div className="px-24">
              <WeatherCard weather={weather!}></WeatherCard>
            </div>
            </div>
          </div>
        </main>
      );
  }
}