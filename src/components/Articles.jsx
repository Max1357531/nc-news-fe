import { getArticles } from "../utils/api"
import { useData } from "../hooks/useData"
import { ArticleCard } from "./ArticleCard"


export const Articles = () =>{
    const {data: articles, loading,error} = useData(getArticles)

    if (loading){
        return (<div></div>)
    }
    else if (error){
        return <p>Error</p>
    }
    else{

        return(<div>{articles.map((articleData)=><ArticleCard key={articleData.article_id} articleData={articleData}/>)}</div>)
    }
}