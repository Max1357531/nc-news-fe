
import { Link } from "react-router-dom";
import commentIcon from "../assets/comment.svg";
export const CommentInteraction = ({articleData}) =>{
    return (
    <Link to={`/articles/${articleData.article_id}#comments`}>
    <div className="commentsInteraction interaction">
        <h3>{articleData.comment_count}</h3>
        <img className="commentImg vectorImg" src={commentIcon}></img>
      </div>
      
      </Link>)
}