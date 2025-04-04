import { useData } from "../hooks/useData";
import { getArticle } from "../utils/api";

import { Link, useParams } from "react-router";
import { dateToPrettyString } from "../utils/dateTime";
import { Comments } from "./Comments";
import { useEffect } from "react";

export const Article = () => {
  const { id } = useParams();
  const { data: article, loading, error } = useData(getArticle, id);

  useEffect(()=>{

    document.getElementById("articleMain").scrollIntoView({behavior: 'instant'})
  },[article])

  if (error) {
    return <p>Error</p>;
  } else {
    return (
      <div id="articleMain">
        <h1 className="articleHeader">{!loading?article.title:"Loading..."}</h1>
        <div className="articleHeaderSub">
          <h3 className="articleAuthor">
            Author:{" "}
            {(!loading
            ?
            <Link to={`../users/${article.author}`}>{article.author}</Link>:
            <span>-----</span>
            )}
          </h3>
          <h3 className="articleTopic">
            Topic:{" "}
            {(!loading
            ?
            <Link to={`/articles?topic=${article.topic}`}>{article.topic}</Link>:
            <span>-----</span>
            )}
          </h3>
        </div>
        
        {(!loading
            ?
            <img className="articleImage" src={article.article_img_url} />:
            <img className="articleImage placeholderImage" src={"https://images.pexels.com/photos/10845119/pexels-photo-10845119.jpeg?w=700&h=700"} />
            )}
        <div className="articleBodyDiv">
          <div className="articleCreatedAtDiv">
            <p className="articleCreatedAt">
              Posted at: {!loading?dateToPrettyString(article.created_at):"---"}
            </p>
          </div>
          <p className="articleBody">{article.body}</p>
        </div>
        <Comments article_id={article.article_id}/>
      </div>
    );
  }
};
