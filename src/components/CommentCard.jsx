import { dateToPrettyString } from "../utils/dateTime"

export const CommentCard = ({commentData})=>{

    return <div className="commentBodyDiv">
              <div className="commentCreatedAtDiv">
                <p className="commentCreatedAt">
                  Posted at: {dateToPrettyString(commentData.created_at)}
                </p>
              </div>
              <p className="commentBody">{commentData.body}</p>
            </div>
}