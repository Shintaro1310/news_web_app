import axios from "axios";
import { ChanceOfRain, Copyright, Description, Detail, Forecast, WeatherImage, Location, Max, Provider, Temperature, Weather } from "./model";


interface WeatherState {
    setWeather: (Weather: Weather) => void;
    setCopyright: (Copyright: Copyright[]) => void;
    setImage: (Image: WeatherImage | null) => void;
    setProvider: (Provider: Provider[]) => void;
    setDescription: (Description: Description | null) => void;
    setForecast: (Forecast: Forecast[]) => void;
    setChanceOfRain: (ChanceOfRain: ChanceOfRain | null) => void;
    setDetail: (Detail: Detail | null) => void;
    setTemperature: (Temperature: Temperature | null) => void;
    setMax: (Max: Max | null) => void;
    setWeatherIsLoading: (WeatherIsLoading: boolean) => void
}

export const fetchWeather = async ({
    setWeather,
    setCopyright,
    setImage,
    setProvider,
    setDescription,
    setForecast,
    setChanceOfRain,
    setDetail,
    setTemperature,
    setMax,
    setWeatherIsLoading

}: WeatherState) => {
    try {
        const response = await axios.get(
            "https://weather.tsukumijima.net/api/forecast?city=130010"
        );
        const fetchedWeather: Weather = {
            publicTime: response.data.publicTime,
            publicTimeFormatted: response.data.publicTimeFormatted,
            publishingOffice: response.data.publishingOffice,
            title: response.data.title,
            link: response.data.link,
            description: response.data.description,
            forecasts: response.data.forecasts,
            location: response.data.location,
            copyright: response.data.copyright,
        };

        const fetchedCopyright: Copyright[] = Array.isArray(
            response.data.copyright
        )
            ? response.data.copyright.map((copyright: any) => ({
                title: copyright.title,
                link: copyright.link,
                image: copyright.image,
                provider: copyright.provider,
            }))
            : [];


        const fetchedImage: WeatherImage = {
            title: response.data.title,
            link: response.data.link,
            url: response.data.url,
            width: response.data.width,
            height: response.data.height,
        };

        const fetchedProvider: Provider[] = Array.isArray(
            response.data.provider
        )
            ? response.data.provider.map((provider: any) => ({
                link: provider.link,
                name: provider.name,
                note: provider.note,
            }))
            : [];

        const fetchedDescription: Description = {
            publicTime: response.data.publicTime,
            publicTimeFormatted: response.data.publicTimeFormatted,
            headlineText: response.data.headlineText,
            bodyText: response.data.bodyText,
            text: response.data.text,
        };

        const fetchedForecast: Forecast[] = Array.isArray(
            response.data.forecast
        )
            ? response.data.forecast.map((forecast: any) => ({
                date: forecast.data,
                dateLabel: forecast.dataLabel,
                telop: forecast.telop,
                detail: forecast.detail,
                temperature: forecast.temperature,
                chanceOfRain: forecast.chanceOfRain,
                image: forecast.image
            }))
            : [];

        const fetchedChanceOfRain: ChanceOfRain = {
            T00_06: response.data.T00_06,
            T06_12: response.data.T06_12,
            T12_18: response.data.T12_18,
            T18_24: response.data.T18_24
        };

        const fetchedDetail: Detail = {
            weather: response.data.weather,
            wind: response.data.wind,
            wave: response.data.wave

        };
        const fetchedTemperature: Temperature = {
            min: response.data.min,
            max: response.data.max,
        };
        const fetchedMax: Max = {
            celsius: response.data.celsius,
            fahrenheit: response.data.fahrenheit
        };
        const fetchedLocation: Location = {
            area: response.data.area,
            prefecture: response.data.prefecture,
            district: response.data.district,
            city: response.data.city,
        };

        await setWeather(fetchedWeather),
            await setCopyright(fetchedCopyright),
            await setImage(fetchedImage),
            await setProvider(fetchedProvider),
            await setDescription(fetchedDescription),
            await setForecast(fetchedForecast),
            await setChanceOfRain(fetchedChanceOfRain),
            await setDetail(fetchedDetail),
            await setTemperature(fetchedTemperature),
            await setMax(fetchedMax),
            setWeatherIsLoading(false)
        console.log(fetchedWeather)



    } catch (error) {
        console.log("エラー", error);
    }
};