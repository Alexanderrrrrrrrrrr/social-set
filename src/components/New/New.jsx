import React from "react";
import "./New.module.css";

const New = (props) => {



    return (
        <div>
            <div>
            {/* {props.newsPage[0]} */}
            </div>
            <div><textarea  placeholder="Введите сообщение"></textarea></div>
            <div><button >Отправить</button></div>
        </div>
    )
}
export default New