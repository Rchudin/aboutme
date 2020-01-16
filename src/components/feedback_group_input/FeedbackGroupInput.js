import React, {useEffect, useState} from "react";
import s from "./FeedbackGroupInput.module.css"


export default ({type, placeholder, name, value, handleInputChange, isErr}) => {
    const [id, setCopyEmail] = useState(Math.random().toString(36).substring(7));
    useEffect(() => {

    },[]);

    return (
        <div className={`${s.feedback_group_input} ${isErr ? s.err_input: ""}`}>
            <input name={name} value={value} onChange={(e) => handleInputChange(e)} type={type} id={id} placeholder={placeholder}/>
            <label htmlFor={id}>{placeholder}</label>
        </div>
    )
}