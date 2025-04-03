import { getArticles } from "../utils/api"
import { useData } from "../hooks/useData"
import { ArticleCard } from "./ArticleCard"
import { useSearchParams } from "react-router-dom"


export const Articles = () =>{
    const [searchParams, setSearchParams] = useSearchParams()

    const {data: articles, loading,error} = useData(getArticles,searchParams.get("topic"))

    if (loading){
        return (<div></div>)
    }
    else if (error){
        return <p>404 Not Found</p>
    }
    else{

        return(<div className="articleMain">{articles.map((articleData)=><ArticleCard key={articleData.article_id} articleData={articleData}/>)}</div>)
    }
}