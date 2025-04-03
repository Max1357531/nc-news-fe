import { Link } from "react-router-dom";
import { useData } from "../hooks/useData";
import { getArticles } from "../utils/api";
import { TopicGrid } from "./TopicGrid";

export const TopicCard = ({ topicData }) => {

  const {data: articles, loading, error} = useData(getArticles,topicData.slug)


  return (
    <article className="topicCard allCards">
      <div className="topicCardLeft">
        <Link to={`../articles?topic=${topicData.slug}`}><h1 className="topicTitle">{topicData.slug}</h1></Link>
        <p>{topicData.description}</p>
      </div>
      {<TopicGrid articles={loading?[]:articles}></TopicGrid>}
    </article>
  );
};
