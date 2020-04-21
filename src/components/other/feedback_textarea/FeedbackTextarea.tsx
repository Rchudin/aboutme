import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import * as s from "./FeedbackTextarea.module.css";

export const FeedbackTextarea = ({input, meta, ...props}: any) => {
    const errToggle = meta.error && meta.touched;
    const  value = input.value;
    return (
        <div className={s.content}>
            <textarea className={!errToggle ? s.area : s.area_err}  {...input} {...props}/>
            <div className={!errToggle ? s.count : s.count_err}>
                {value ? value.length : 0}/3000
            </div>
        </div>
    )
}