import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://klike.net/uploads/posts/2018-07/1531908006_1.jpg'></img>
            </div>
            <div className={s.DescriptionBlock}>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo
