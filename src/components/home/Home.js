import React from "react";
import { useTranslation } from "react-i18next";
import s from "./Home.module.css"
import backgroundImg from '../../assets/img/mads.png'
import backgroundWebp from "../../assets/img/mads.webp"

export default () => {
    const { t } = useTranslation();

    return (
        <div className={s.home_content}>
            <div className={s.home_from}>
                <label className={s.home_from_1}>{t('developer')}</label>
                <div >
                    <label className={s.home_from_2}>{t('from')} </label>
                    <label className={s.home_from_3}>{t('Moscow')}</label>
                </div>
            </div>
            <picture>
                <source srcSet={backgroundWebp} type="image/webp" className={s.img_background} />
                <img src={backgroundImg} alt="" className={s.img_background} />
            </picture>
        </div>
    )
}
