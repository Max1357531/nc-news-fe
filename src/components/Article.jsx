import { useData } from "../hooks/useData";
import { getArticle } from "../utils/api";

import { Link, useParams } from "react-router";

export const Article = () => {
  const { id } = useParams();
  const { data: article, loading, error } = useData(getArticle, id);


  if (loading) {
    return <div></div>;
  } else if (error) {
    return <p>Error</p>;
  } else {
    return (
      <div className="articleMain">
        <h1 className="articleHeader">{article.title}</h1>
        <div className="articleHeaderSub">
          <h3 className="articleAuthor">
            Author:{" "}
            <Link to={`../users/${article.author}`}>
              {article.author}
            </Link>
            
          </h3>
          <h3 className="articleTopic">
          Topic:{" "}
          <Link to={"./TBC"}>
          {article.topic}
      </Link>
      </h3>
        </div>
        <img className="articleImage" src={article.article_img_url}></img>
      </div>
      
      
    );
  }
};
