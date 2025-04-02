import { useEffect } from "react"
import { getArticles } from "../utils/api"
import { useData } from "../hooks/useData"
import { ArticleCard } from "./ArticleCard"


export const Articles = () =>{
    const {data: articles, loading,error} = useData(getArticles)
    

    if (loading){
        return (<div></div>)
    }
    else{
        console.log("loaded")
        return(<div>{articles.map((articleData)=><ArticleCard key={articleData.article_id} articleData={articleData}/>)}</div>)
    }
}