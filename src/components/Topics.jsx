import { useData } from "../hooks/useData"
import { getTopics } from "../utils/api"
import { TopicCard } from "./TopicCard"




export const Topics = () =>{
    const {data: topics, loading,error} = useData(getTopics)
    

    if (loading){
        return (<div></div>)
    }
    else{

        return(<div>{topics.map((topicData)=><TopicCard key={topicData.slug} topicData={topicData}></TopicCard>)}</div>)
    }
}