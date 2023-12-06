import React from "react";
import { addPostActionCreater, updateNewPostTextActionCreater } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";



   

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        updateNewPostText: (text)=> {
            let action = updateNewPostTextActionCreater(text)
            dispatch(action);
        },
addPost: () => {
    dispatch(addPostActionCreater())
}
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToprops)(MyPosts);

export default MyPostsContainer;