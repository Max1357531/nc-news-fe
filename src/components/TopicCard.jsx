import { useData } from "../hooks/useData";
import { getArticles } from "../utils/api";
import { TopicGrid } from "./TopicGrid";

export const TopicCard = ({ topicData }) => {

  const {data: articles, loading, error} = useData(getArticles,topicData.slug)


  return (
    <article className="topicCard allCards">
      <div className="topicCardLeft">
        <h1>{topicData.slug}</h1>
        <p>{topicData.description}</p>
      </div>
      {<TopicGrid articles={loading?[]:articles}></TopicGrid>}
    </article>
  );
};
