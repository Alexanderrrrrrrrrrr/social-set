import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import { addPostActionCreater } from "../../../redux/state";
import { updateNewPostTextActionCreater } from "../../../redux/state";



const MyPosts = (props) => {


    let postsElement = props.posts.map((p) => <Post message={p.message} like={p.like} />)
    let newPOstElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreater());
    }

    let onPostChange = () => {
        let text = newPOstElement.current.value;
        let action = updateNewPostTextActionCreater(text )
        props.dispatch(action);
        
    }
    return (
        <div className={s.postBlock}>
            <h2>my posts</h2>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPOstElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost} value={props.newPostText}>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>

        </div>
    )
}

export default MyPosts