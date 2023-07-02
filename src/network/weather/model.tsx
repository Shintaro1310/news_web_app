export interface Weather {
    publicTime: string;
    publicTimeFormatted: string;
    publishingOffice: string;
    title: string;
    link: string;
    description: Description;
    forecasts: Forecast[];
    location: Location;
    copyright: Copyright;
}

export interface Copyright {
    title: string;
    link: string;
    image: WeatherImage;
    provider: Provider[];
}

export interface WeatherImage {
    title: string;
    link: string | null;
    url: string;
    width: number;
    height: number;
}

export interface Provider {
    link: string;
    name: string;
    note: string;
}

export interface Description {
    publicTime: string;
    publicTimeFormatted: string;
    headlineText: string;
    bodyText: string;
    text: string;
}

export interface Forecast {
    date: string;
    dateLabel: string;
    telop: string;
    detail: Detail;
    temperature: Temperature;
    chanceOfRain: ChanceOfRain;
    image: WeatherImage;
}

export interface ChanceOfRain {
    T00_06: string;
    T06_12: string;
    T12_18: string;
    T18_24: string;
}

export interface Detail {
    weather: string;
    wind: string;
    wave: string;
}

export interface Temperature {
    min: Max;
    max: Max;
}

export interface Max {
    celsius: null | string;
    fahrenheit: null | string;
}

export interface Location {
    area: string;
    prefecture: string;
    district: string;
    city: string;
}