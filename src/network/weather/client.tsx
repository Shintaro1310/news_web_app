import axios from "axios";

import { atom, selector } from "recoil";
import { Weather } from "./model";

export const fetchWeatherState = atom({
  key:"fetchWeatherList",
  default:selector({
    key:"fetchWeatherListSelector",
    get:async({})=>{
    try{
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
      return fetchedWeather
    }catch(e){
        throw e;
      }
    }
  })
})