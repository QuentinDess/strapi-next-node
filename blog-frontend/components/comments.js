import React from "react"
import Comment from "./comment"

const Comments = ({ comments }) => {
  return (
    <div>
      <div className="uk-child-width-1-2@s" data-uk-grid="true">
            <div>
                <h3>Comments</h3>
            {comments.map((comment) => (
                <Comment comment={comment} key={comment.id}></Comment>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Comments
