import React from "react"
import Comment from "./comment"

const Comments = ({ comments }) => {
  return (
      <ul className="uk-comment-list">
          <h3>Comments</h3>
         <li>

             {comments.map((comment) => (
                 <Comment comment={comment} key={comment.id}></Comment>
             ))}
         </li>
      </ul>


  )
}

export default Comments
