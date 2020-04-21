import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import * as s from "./FeedbackInput.module.css"


export const FeedbackInput = ({input, meta, placeholder, ...props}:any) => {
    const {t} = useTranslation();
    const [id, setCopyEmail] = useState(Math.random().toString(36).substring(7));
    const errToggle = meta.error && meta.touched;

    return (
        <div className={`${s.content} ${errToggle ? s.error: ""}`}>
            <input  id={id} placeholder={placeholder} {...input} {...props}/>
            <label className={s.header} htmlFor={id}>{placeholder}</label>
            <div className={ !errToggle ? s.message : s.message_error}>{t(meta.error)}</div>
        </div>
    )
};