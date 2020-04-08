import React from "react";
import style from "./Message.module.css";

function Message() {
    return (
        <div className={style.wrapper}>
            <div className={style.message}>
                <div className={style.username}>Валентин</div>
                <div className={style.messageText}>
                    ЕПАМ, оставь мне место, я бегу
                </div>
                <div className={style.messageTime}>8:00 AM</div>
            </div>
        </div>
    );
}

export default Message;
