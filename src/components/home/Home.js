import React from "react";
import s from "./Home.module.css"
import {useTranslation} from "react-i18next";
export default () => {
    const {t} = useTranslation();

    return (
        <div className={s.home_content}>
            <div className={s.home_from}>
                <label className={s.home_from_1}>{t('developer')}</label>
                <div >
                    <label className={s.home_from_2}>{t('from')} </label>
                    <label className={s.home_from_3}>{t('Moscow')}</label>
                </div>
            </div>
        </div>
    )
}