import React, { useState, useEffect } from "react";
import Moment from "react-moment"
import { fetchAPI } from "../lib/api"

const Comment = ({ comment }) => {
    const  [user,setUser ]= useState({})
    async function fetchUser() {
        const user = await fetchAPI(`/users-permissions/${comment.users_permissions_user}`);
      }
    
      useEffect(() => {
        fetchUser();
      });
   console.log(comment)
    return (
      <div>
        <div className="uk-grid-small uk-flex-left" data-uk-grid="true">

            <div className="uk-width-expand">
             <p>
                {comment.Content}
              </p>
              <p className="uk-text-meta uk-margin-remove-top">
                <Moment format="MMM Do YYYY">{comment.created_at}</Moment>
              </p>
            </div>
          </div>
      </div>
    )
  }
  
  export default Comment