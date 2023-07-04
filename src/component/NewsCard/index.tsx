import { format } from "date-fns";

interface NewsCardContent {
    image: string,
    title: string,
    publishedAt: string,
    url: string,
    author: string | null
}

interface TopNewsCardContent {
    image1: string | null,
    image2: string | null,
    image3: string | null,
    image4: string | null,
    image5: string | null
}


export function NewsCard({ image, title, publishedAt, url, author }: NewsCardContent) {
    const dateString = publishedAt;
    const date = new Date(dateString);
    const formattedDate = format(date, "yyyy年MM月dd日");
    return (
        <div className="flex justify-center px-24 py-1"> <a href={url} target="_blank" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row w-full h-40  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-52 md:h-28 md:rounded-none md:rounded-l-lg px-2" src={image} alt={image} />
            <div className="flex flex-col justify-between p-4 leading-normal space-y-4">
                <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <div className=" space-y-2">
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-100">{formattedDate}</p>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{author}</p>
                </div>
            </div>
        </a> </div>
    )
}

export const TopNewsCard = ({ image1, image2, image3, image4, image5 }: TopNewsCardContent) => {

    return (

        <div id="default-carousel" className="relative w-full" data-carousel="slide">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                <div className="p-4 duration-700 ease-in-out" data-carousel-item>
                    <img src={image1!} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={image1!} />
                </div>
                <div className="duration-700 ease-in-out" data-carousel-item>
                    <img src={image2!} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={image2!} />
                </div>
                <div className="duration-700 ease-in-out" data-carousel-item>
                    <img src={image3!} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={image3!} />
                </div>
                <div className="duration-700 ease-in-out" data-carousel-item>
                    <img src={image4!} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={image4!} />
                </div>
                <div className="duration-700 ease-in-out" data-carousel-item>
                    <img src={image5!} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={image5!} />
                </div>
            </div>
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
            </div>
            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>






    )






}