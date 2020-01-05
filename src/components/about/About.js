import React from "react";
import {useTranslation} from "react-i18next";
import './About.css'

export default () => {
    const {t} = useTranslation();

    return (
        <div className={"about"}>
            <div className={"between_flex"}/>
            <div className={"about_im"}>
                {t("My name is Chudin Ruslan")}
            </div>
            <div className={"about_txt"}>
                {t("I am Go, JavaScript, Python developer")}
            </div>
            <div className={"between_flex"}/>
        </div>
    )
}