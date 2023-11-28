import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
            <div className={s.item}>
                <img src="https://thumb.tildacdn.com/tild3963-3766-4339-a534-393530653838/-/format/webp/___-_.jpg"></img>
                {props.message}
                <div>
                    <span>Like</span>{props.like}
                </div>
            </div>
    )
}
export default Post