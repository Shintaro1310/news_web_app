import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import { NewsList, NewsListArticle, NewsListSource } from '@/network/newsList/model'
import { fetchNewsList } from '@/network/newsList/client'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const[newsList,setNewsList]=useState<NewsList|{}>()
  const[newsListArticle,setNewsListArticle]=useState<NewsListArticle[]>([])
  const[newsListSource,setNewsListSource]=useState<NewsListSource|{}>()
  useEffect(()=>{
    fetchNewsList({setNewsList,setNewsListArticle,setNewsListSource})
  },[])




  return (
    <main>
      <div><button onClick={()=>{console.log(newsList)}}>あ</button>
      </div>


    </main>
  )
}
