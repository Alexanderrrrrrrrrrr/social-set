import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
// import { addPostActionCreater,updateNewPostTextActionCreater } from "../../../redux/profile-reducer";



const   MyPosts = (props) => {


    let postsElement = props.posts.map((p) => <Post message={p.message} like={p.like} />)
    let newPOstElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }   

    let onPostChange = () => {
        let text = newPOstElement.current.value;
        props.updateNewPostText(text) 
       
    }
    return (
        <div className={s.postBlock}>
            <h2>my posts</h2>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPOstElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost} value={props.newPostText}>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>

        </div>
    )
}

export default MyPosts