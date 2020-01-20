import React, {useState, useEffect} from "react";
import {CopyToClipboard} from "react-copy-to-clipboard";
import s from "./Contacts.module.css";
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";


const email = "rus.chudin@gmail.com";
const telegram = "t.me/rchudin";


export default ({setPage, token}) =>{
    const {t} = useTranslation();
    const [copyEmail, setCopyEmail] = useState(false);
    const [copyTelegram, setCopyTelegram] = useState(false);

    useEffect(() => {
        setPage(1)
    },[]);

    const onClickEmail = () => {
        setCopyEmail(true);
        setTimeout(() => setCopyEmail(false), 800);
    };

    const onClickTelegram = () => {
        setCopyTelegram(true);
        setTimeout(() => setCopyTelegram(false), 800);
    };

    return (
        <div className={s.page}>
            <div className={s.stretch}/>
            <div className={s.header}>
                {t('get in touch')}
            </div>
            <div className={s.txt}>
                {t("let's build something")}
                <br/>
                {t("great together")}
            </div>
            <div className={s.stretch}/>

            <div className={s.contacts}>
                <CopyToClipboard text={email}>
                    <div className={s.link} onClick={onClickEmail}>
                        {email}
                        {
                            copyEmail && (
                                <span className={s.tooltip}>
                                      {t('copied')}
                                 </span>
                            )
                        }
                    </div>
                </CopyToClipboard>
                <CopyToClipboard text={telegram}>
                    <div className={s.link} onClick={onClickTelegram}>
                        {telegram}
                        {
                            copyTelegram && (
                                <span className={s.tooltip}>
                                      {t('copied')}
                                 </span>
                            )
                        }
                    </div>
                </CopyToClipboard>
                <a target="_blank" href="https://t.me/rchudin">
                    <div className={s.link}>telegram</div>
                </a>

                {token &&
                <NavLink to="/contacts/feedback" className={s.switch}>
                    <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.9975 0L8.5 6.18084L15.0025 0L17 1.90283L8.5 10L0 1.90283L1.9975 0Z"
                              fill="white"/>
                    </svg>
                </NavLink>}
            </div>
        </div>
    )
}