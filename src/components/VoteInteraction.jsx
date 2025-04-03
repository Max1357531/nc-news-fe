
import likeIcon from "../assets/like.png";
export const VoteInteraction = ({articleData}) =>{
    return (
    <div className="votesInteraction interaction">
        <h3>{articleData.votes}</h3>
        <img className="voteImg vectorImg" src={likeIcon}></img>
      </div>)
}