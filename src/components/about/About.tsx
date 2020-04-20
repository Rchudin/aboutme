import * as React from "react";
import { useTranslation } from "react-i18next";
import * as s from './About.module.css';


export interface AboutProps {

}

export default (props: AboutProps) => {
    const { t } = useTranslation();

    return (
        <div className={s.content} >
            <div className={s.main}>
                <label className={s.me}>{t("My name is Ruslan Chudin")}</label>
                <label className={s.iam}>{t("I am")}</label>
            </div>
        </div>
    )
}