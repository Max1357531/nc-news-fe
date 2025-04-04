import { useLocation } from "react-router-dom";
import { useData } from "../hooks/useData";
import { getCommentsById } from "../utils/api";
import { CommentCard } from "./CommentCard";
import { Error404 } from "./Error404";
import { useEffect } from "react";

export const Comments = ({ article_id }) => {
  const {
    data: comments,
    loading,
    error,
  } = useData(getCommentsById, article_id);

  const { hash } = useLocation()
  
  useEffect(()=>{

    if (hash==="#comments")document.getElementById("commentDivMain").scrollIntoView({behavior: 'smooth'})
  },[comments])

  if (loading) {
    return <div id="commentDivMain"></div>;

  } else if (error) {
    return<Error404 />;
  } else {

    return (

    <div id="commentDivMain">
        {comments.map((commentData) => {
        return <CommentCard key={commentData.comment_id}commentData={commentData}> </CommentCard>;
        })}
    </div>

    );
  }
};
