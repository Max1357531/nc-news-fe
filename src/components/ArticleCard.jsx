import { Link } from "react-router-dom";
import commentIcon from '../assets/comment.svg';


export const ArticleCard = ({ articleData }) => {
  console.log(articleData);

  return (
    <article className="articleCard allCards">
        
        <div className="articleTopDiv">
        <Link to={`./${articleData.article_id}`}>
        <img className="articleImg" src={articleData.article_img_url}></img>
        </Link>
        <div className="articleInteractionsDiv">
            <div className="articleComments articleInteractions"><h3>{articleData.comment_count}</h3></div>
            <div className="articleVotes articleInteractions"><h3>{articleData.votes}</h3></div>

        </div>
        </div>
        
        <Link to={"./TBC"}>
        <h3 className="articleTopic">{articleData.topic}</h3>
        </Link>

      <Link to={`./${articleData.article_id}`}>
        <h1 className="articleHeader">{articleData.title}</h1>
        
      </Link>
      <h3 className="articleAuthor">Author: <Link to={`../users/${articleData.author}`}>{articleData.author}</Link></h3>
      
    </article>
  );
};
