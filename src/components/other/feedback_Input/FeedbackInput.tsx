import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import * as s from "./FeedbackInput.module.css"


export const FeedbackInput = ({input, meta, placeholder, ...props}:any) => {
    const {t} = useTranslation();
    const [id, setCopyEmail] = useState(Math.random().toString(36).substring(7));
    const errToggle = meta.error && meta.touched;

    return (
        <div className={`${s.content} ${errToggle ? s.error: ""}`}>
            <input id={id} placeholder={placeholder} {...input} {...props}/>
            <label htmlFor={id}>{placeholder}</label>
            <span className={ errToggle ? s.error_span : ""}>{t(meta.error)}</span>
        </div>

        // <div className={s.container}>
        //     <input className={ errToggle ?  s.invalid_input : s.input_login}  {...input} {...props}/>
        //     <span className={ errToggle ? s.error_span : s.error_span_invalid}>{t(meta.error)}</span>
        // </div>

    // <div className={`${s.feedback_group_input} ${isErr ? s.err_input: ""}`}>
    //     <input name={name} value={value} onChange={(e) => handleInputChange(e)} type={type} id={id} placeholder={placeholder}/>
    //     <label htmlFor={id}>{placeholder}</label>
    // </div>
    )
};