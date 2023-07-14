import { NewsListArticle } from "@/network/genre/top/model";
import { format } from "date-fns";
import { useRef, useState } from "react";

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
}

interface ImageNewsCarouselContent{
    newsCarouselList:NewsListArticle[]

}



export const NewsCarousel =({newsCarouselList}:ImageNewsCarouselContent)=>{


    const slidesContainerRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = (width: number) => {
      const container = slidesContainerRef.current;
      if (container) {
        const newPosition = scrollPosition + width;
        container.scrollTo({
          left: newPosition,
          behavior: 'smooth',
        });
        setScrollPosition(newPosition);
      }
    };

    return (
        <div>
          <div 
           className="max-w-5xl mx-20 py-1  duration-500 ">
            <div className="relative">
              <div
                className="slides-container h-96 max-w-4xl flex  overflow-hidden overflow-x-auto rounded  before:shrink-0 after:w-[40vw] after:shrink-0 md:before:w-7 md:after:w-7"
                ref={slidesContainerRef}
                onScroll={(e) => setScrollPosition(e.currentTarget.scrollLeft)}
              >
                {newsCarouselList.slice(0,6).map((value, index) => {
                      const dateString = value.publishedAt;
                      const date = new Date(dateString);
                      const formattedDate = format(date, "yyyy年MM月dd日");
                             return  <div key={value.source.id}className="w-screen bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100">
                              <a href={value.url} target="_blank">
                                  <img className="rounded-t-lg w-full h-44" src={value.urlToImage!} alt="" />
                                  <div className="p-5">
                                    <div className="w-60">
                                    <h5 className="wmb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">{value.title}</h5>
                                    </div>
                                  <p className="py-1 mb-3 font-normal text-gray-500 dark:text-gray-400">{formattedDate}</p>
                                  <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{value!.author}</p>
              
                              </div>
                              </a>
                          </div>
                         
})}
              </div>
              <div className="absolute top-0 -left-8 h-full items-center hidden md:flex">
                <button
                  role="button"
                  className="prev group"
                  aria-label="prev"
                  onClick={() => handleScroll(-500)}
                >
                  <svg
                    width="22"
                    height="39"
                    viewBox="0 0 22 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.5 2L3 19.5L20.5 37"
                      stroke="#7F7F7F"
                      strokeWidth="3"
                    />
                  </svg>
                </button>
              </div>
              <div className="absolute top-0 -right-12 h-full items-center hidden md:flex">
                <button
                  role="button"
                  className="next group"
                  aria-label="next"
                  onClick={() => handleScroll(500)}
                >
                  <svg
                    width="22"
                    height="39"
                    viewBox="0 0 22 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 37L19.5 19.5L2 2"
                      stroke="#7F7F7F"
                      strokeWidth="3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    };







export function NewsCard({ image, title, publishedAt, url, author }: NewsCardContent) {
    const dateString = publishedAt;
    const date = new Date(dateString);
    const formattedDate = format(date, "yyyy年MM月dd日");
    return (
        <div className="flex justify-center   py-1">
        <a href={url} target="_blank" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row w-10/12 h-40  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="px-4">
            <img className=" w-32  h-28  " src={image} alt={image} />

            </div>
          <div className="flex flex-col justify-between p-4 leading-normal space-y-4">
            <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            <div className=" space-y-2">
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-100">{formattedDate}</p>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{author}</p>
            </div>
          </div>
        </a>
      </div>
      
    )
}

export const TopTwoCard = ({ image1, image2 }: TopNewsCardContent) => {

    return (
        <div className="flex flex-row px-48 ">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100">
                <a href="#">
                    <img className="rounded-t-lg" src={image1!} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                </div>
            </div>
            <div>
            <div className="flex justify-center"> <a href={image1!} target="_blank" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row w-full h-40  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="px-4">
            <img className="w-32 h-28" src={image1!} alt={image1!} />
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal space-y-4">
                <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">ああああああああああああああああああああああああああああああ</h5>
                <div className=" space-y-2">
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-100">あ</p>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">あ</p>
                </div>
            </div>
        </a> </div>
        <div className="flex justify-center "> <a href={image1!} target="_blank" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row w-full h-40  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="px-4">
            <img className="w-32 h-28" src={image1!} alt={image1!} />
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal space-y-4">
                <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">ああああああああああああああああああああああああああああああ</h5>
                <div className=" space-y-2">
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-100">あ</p>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">あ</p>
                </div>
            </div>
        </a> </div>
        <div className="flex justify-center"> <a href={image1!} target="_blank" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row w-full h-40  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="px-4">
            <img className="w-32 h-28" src={image1!} alt={image1!} />
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal space-y-4">
                <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">ああああああああああああああああああああああああああああああ</h5>
                <div className=" space-y-2">
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-100">あ</p>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">あ</p>
                </div>
            </div>
        </a> </div>
            </div>
        </div>
    )
}

// export const TopNewsCard = ({ image1, image2, image3, image4, image5 }: TopNewsCardContent) => {

//     return (

//         <div id="default-carousel" className="relative w-full" data-carousel="slide">
//             <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//                 <div className="p-4 duration-700 ease-in-out" data-carousel-item>
//                     <img src={image1!} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={image1!} />
//                 </div>
//                 <div className="duration-700 ease-in-out" data-carousel-item>
//                     <img src={image2!} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={image2!} />
//                 </div>
//                 <div className="duration-700 ease-in-out" data-carousel-item>
//                     <img src={image3!} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={image3!} />
//                 </div>
//                 <div className="duration-700 ease-in-out" data-carousel-item>
//                     <img src={image4!} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={image4!} />
//                 </div>
//                 <div className="duration-700 ease-in-out" data-carousel-item>
//                     <img src={image5!} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={image5!} />
//                 </div>
//             </div>
//             <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
//                 <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
//                 <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
//                 <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
//                 <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
//                 <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
//             </div>
//             <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
//                 <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                     <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
//                     </svg>
//                     <span className="sr-only">Previous</span>
//                 </span>
//             </button>
//             <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
//                 <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                     <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
//                     </svg>
//                     <span className="sr-only">Next</span>
//                 </span>
//             </button>
//         </div>






//     )






// }