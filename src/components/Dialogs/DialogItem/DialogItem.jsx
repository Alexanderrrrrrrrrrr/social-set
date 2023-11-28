import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from 'react-router-dom'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    
    return (
        <div className={s.dialog}>
            <img className={s.dilogImg} src='https://thumb.tildacdn.com/tild3963-3766-4339-a534-393530653838/-/format/webp/___-_.jpg'></img>
            <NavLink to={path}>{props.name}</NavLink>
            </div>
    )
}

export default DialogItem;