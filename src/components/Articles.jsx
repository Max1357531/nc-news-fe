import { getArticles } from "../utils/api"
import { useData } from "../hooks/useData"
import { ArticleCard } from "./ArticleCard"
import { useSearchParams } from "react-router-dom"
import { Error404 } from "./Error404"


export const Articles = () =>{
    const [searchParams] = useSearchParams()

    const {data: articles, loading,error} = useData(getArticles,searchParams.get("topic"))

    if (loading){
        return (<div></div>)
    }
    else if (error){
        return <Error404 />
    }
    else{

        return(<div className="articleMain">{articles.map((articleData)=><ArticleCard key={articleData.article_id} showTopic={!searchParams.get("topic")}articleData={articleData}/>)}</div>)
    }
}