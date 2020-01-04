import React from "react";
import "./Home.css"
import {useTranslation} from "react-i18next";
export default () => {
    const {t} = useTranslation();

    return (
        <div className="home_content">
            <div className="home_from">
                <label className="home_from_1">{t('developer')}</label>
                <div >
                    <label className="home_from_2">{t('from')} </label>
                    <label className="home_from_3">{t('Moscow')}</label>
                </div>
            </div>
        </div>
    )
}