import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { NewsList, NewsListArticle, NewsListSource } from "@/network/genre/top/model";
import { fetchNewsList } from "@/network/genre/top/client";
import NewsCard from "@/component/NewsCard";
import Loading from "@/component/Loading";
import Header from "@/component/Header";
import { ChanceOfRain, Copyright, Description, Detail, Forecast, Max, Provider, Temperature, Weather, WeatherImage } from "@/network/weather/model";
import WeatherCard from "@/component/TemperatureCard";
import { fetchWeather } from "@/network/weather/client";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [newsList, setNewsList] = useState<NewsList | null>(null);
  const [newsListArticle, setNewsListArticle] = useState<NewsListArticle[]>([]);
  const [newsListSource, setNewsListSource] = useState<NewsListSource | null>(null);
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    fetchNewsList({ setNewsList, setNewsListArticle, setNewsListSource, setIsLoading });
    fetchWeather({ setWeather, setCopyright, setImage, setProvider, setDescription, setForecast, setChanceOfRain, setDetail, setTemperature, setMax, setWeatherIsLoading })

  }, []);

  return (
    <main>
      {isLoading ? <Loading></Loading> : <div>
        <div className="space-y-5">
          <Header></Header>
          <div className="flex flex-row ">
            <div className="space-y-4">
              {
                newsListArticle.map((article) => (
                  <NewsCard image={article.urlToImage!} title={article.title} publishedAt={article.publishedAt} url={article.url} author={article.author}></NewsCard>
                ))
              }
            </div>
            <div className="px-24">
              <WeatherCard weather={weather!}></WeatherCard>


            </div>
         
          </div>

        </div>
      </div>
      }

    </main>
  );
}