import { Link } from "react-router-dom";

import { CommentInteraction } from "./commentInteraction";
import { VoteInteraction } from "./VoteInteraction";

export const ArticleCard = ({ articleData,showTopic }) => {


  return (
    <article className="articleCard allCards">
      <div className="articleTopDiv">
        <Link to={`./${articleData.article_id}`}>
          <img className="articleImg" src={articleData.article_img_url}></img>
        </Link>
        <div className="articleInteractionsDiv">
          <CommentInteraction articleData={articleData} />
          <VoteInteraction articleData={articleData} />
        </div>
      </div>

      {showTopic?
      <Link to={`/articles/?topic=${articleData.topic}`}>
        <h3 className="articleTopic">{articleData.topic}</h3>
      </Link>:
      <></>
      }
      <Link to={`./${articleData.article_id}`}>
        <h1 className="articleHeaderCard">{articleData.title}</h1>
      </Link>
      <h3 className="articleAuthor">
        Author:{" "}
        <Link to={`../users/${articleData.author}`}>{articleData.author}</Link>
      </h3>
    </article>
  );
};
