interface NewsCardContent{
    image:string,
    title:string,
    publishedAt:string
}



export default function NewsCard({image,title,publishedAt}:NewsCardContent){





    return(
        <div className="flex justify-center px-8">
            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row w-full h-40  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-52 md:h-28 md:rounded-none md:rounded-l-lg px-2" src={image} alt={image}/>
    <div className="flex flex-col justify-between p-4 leading-normal space-y-4">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{publishedAt}</p>
    </div>
</a>



        </div>
        
  


      



    )




    
}