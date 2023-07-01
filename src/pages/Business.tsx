import Header from "@/component/Header";
import Loading from "@/component/Loading";
import NewsCard from "@/component/NewsCard";
import { fetchBusinessNewsList } from "@/network/business/client";
import { BusinessArticleNewsList, BusinessNewsList, BusinessSourceNewsList } from "@/network/business/model";
import { useEffect, useState } from "react";

export default function Business() {
    const [newsList, setBusinessNewsList] = useState<BusinessNewsList | null>(null);
    const [newsListArticle, setBusinessNewsListArticle] = useState<BusinessArticleNewsList[]>([]);
    const [newsListSource, setBusinessNewsListSource] = useState<BusinessSourceNewsList | null>(null);
    const [isLoading,setBusinessIsLoading] =useState(true)
  
    useEffect(() => {
      fetchBusinessNewsList({ setBusinessNewsList, setBusinessNewsListArticle, setBusinessNewsListSource ,setBusinessIsLoading});
    }, []);
  
    return (
      <main>
      {   isLoading? <Loading></Loading>: <div>
        <Header></Header>
        <div className="space-y-4">
          <br></br>
          {
          
              newsListArticle.map((article) => (
      
             <NewsCard  image={article.urlToImage!} title={article.title} publishedAt={article.publishedAt} url={article.url} author={article.author}></NewsCard>
                
               ))
          }
        </div>
          
        </div>}
  
      </main>
    );
  }