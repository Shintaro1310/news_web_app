import { Forecast, Weather } from "@/network/weather/model"

interface WeatherContent {
    weather: Weather
}


export default function WeatherCard({ weather }: WeatherContent) {

    return (
        <div className=" w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="p-12">
                <div className="space-y-4">
                    <div className="font-bold text-xl">{weather.location.prefecture}</div>

                    <div className="flex flex-row space-x-4">
                        {weather.forecasts.map((weather) => (
                            <div>
                                <div className="">{weather.dateLabel}</div>
                                <img src={weather.image.url} alt="weather" style={{ width: '100%', height: 'auto' }} />
                                <div className="text-xs">{weather.telop}</div>
                    
                          
                            </div>
                        ))}
                    </div>


                </div>

            </div>
        </div>







    )






}