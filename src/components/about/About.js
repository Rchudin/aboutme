import React from "react";
import {useTranslation} from "react-i18next";
import s from './About.module.css'

export default () => {
    const {t} = useTranslation();

    return (
        <div className={s.content}>
            <div className={s.stretch}/>
            <div className={s.me}>
                {t("My name is Chudin Ruslan")}
            </div>
            <div className={s.txt}>
                {t("I am Go, JavaScript, Python developer")}
            </div>
            <div className={s.stretch}/>
        </div>
    )
}