import { Forecast, Weather } from "@/network/weather/model"

interface WeatherContent {
    weather: Weather
}


export function WeatherCard({ weather }: WeatherContent) {

    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="px-12 py-12">
                <div className="space-y-4">
                    <div className="font-bold text-xl">{weather.location.prefecture}</div>
                    <div className="flex flex-row space-x-4">
                        {weather.forecasts.map((weather) => (
                            <div key={weather.image.width}>
                                <div className="p-4">{weather.dateLabel}</div>
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