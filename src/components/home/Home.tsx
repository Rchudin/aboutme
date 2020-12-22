import * as React from "react";
import { useTranslation } from "react-i18next";
import s from './Home.module.css';
import {mobileSize} from "../../utils/constants";
import backgroundImg from '../../assets/img/maninsmoke.png'
import backgroundWebp from '../../assets/img/maninsmoke.webp'
import backgroundWebpMobile from '../../assets/img/maninsmoke9x16.webp'


export interface HomeProps {

}

export default (props: HomeProps) => {
    const { t } = useTranslation();

    return (
        <div className={s.content} >
            <div className={s.me}>
                {t('developer')}
                <label className={s.from}>{t('from')}
                    <label className={s.msk}>{t('Moscow')}</label>
                </label>
            </div>
            <picture>
                <source srcSet={backgroundWebpMobile} type="image/webp" className={s.img_background} media={`(max-width:${mobileSize}px)`} />
                <source srcSet={backgroundWebp} type="image/webp" className={s.img_background} />
                <img src={backgroundImg} alt="" className={s.img_background} />
            </picture>
        </div>
    )
}
