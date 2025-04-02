
import commentIcon from "../assets/comment.svg";
export const CommentInteraction = ({articleData}) =>{
    return (
    <div className="commentsInteraction interaction">
        <h3>{articleData.comment_count}</h3>
        <img className="commentImg" src={commentIcon}></img>
      </div>)
}