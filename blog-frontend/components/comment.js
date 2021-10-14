import React, { useState, useEffect } from "react";
import Moment from "react-moment"
import { fetchAPI } from "../lib/api"
import NextImage from "./image"
const Comment = ({ comment }) => {
    const [author, setAuthor] = useState({});
    const [imgUrl, setImgUrl] = useState();
    useEffect(() => {
        // Create an scoped async function in the hook
        async function fetchAuthor() {
             await fetchAPI(`/writers/${comment.writer}`).then((data) =>{
                     setImgUrl(data.picture.url)

                 }
             )
        }    // Execute the created function directly
        setAuthor(fetchAuthor());

    },[comment]);

    return (
        <article className="uk-comment">
            <header className="uk-comment-header">
                <div className="uk-grid-medium uk-flex-middle" uk-grid>
                    <div className="uk-width-auto">
                    </div>
                    <div className="uk-width-expand">
                        <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset"
                                                                             href="#">{author.name}</a></h4>
                        <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                            <li>  <Moment format="MMM Do YYYY">{comment.date}</Moment></li>

                        </ul>
                    </div>
                </div>
            </header>
            <div className="uk-comment-body">
                <p>{comment.Content}</p>
            </div>
        </article>


    )
  }

export async function getStaticPropsComment({ params }) {

    console.log("static-props-comment")
    return {
        props: { },
        revalidate: 1,
    }
}
  export default Comment

