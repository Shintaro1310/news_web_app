interface NewsCardContent{
    image:string,
    title:string,
    publishedAt:string
}



export default function NewsCard({image,title,publishedAt}:NewsCardContent){





    return(
        <div className="space-y-4">
            <div className="flex">
            <div className="w-72 h-13 px-8"> 
                <img src={image}></img></div>
                <div className="space-y-8">
                <div className="text-xl font-bold">{title}</div>
            <div className="px-210">{publishedAt}</div>
                </div>
            </div>
            <div className="px-8"><hr></hr></div>
          
        </div>

      



    )




    
}