import React from "react";
import "./Navbar.css"
import {FIcon, GitHubIcon, InIcon} from "../icons/icons";
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";

export default () => {
    const changeLanguage = () => {
        let lng = i18n.language;
        if (lng === "en") {
            lng = "ru";
        } else {
            lng = "en";
        }

        i18n.changeLanguage(lng).then();
        document.querySelector('html').setAttribute('lang', lng);
    };

    const {t, i18n} = useTranslation();

    return (
        <div className="navbar">
            <div className="navbar_top">
                <div className="navbar_block_lng">
                    <span className="navbar_lng  navbar_lng_deactivated" onClick={changeLanguage}>
                        {(i18n.language === "ru") ? "en" : "ru"}
                    </span>
                    <div/>
                    <span className="navbar_lng">
                        {i18n.language}
                    </span>
                </div>
            </div>
            <ul className="navbar_middle">
                <NavLink to="/about" activeClassName="navbar_li_selected" className="navbar_li">
                    <div/>
                    <span>{t('about')}</span>
                </NavLink>
                <li className="navbar_li">
                    <div/>
                    <span>{t('projects')}</span>
                </li>
                <NavLink to="/contacts" activeClassName="navbar_li_selected" className="navbar_li">
                    <div/>
                    <span>{t('contacts')}</span>
                </NavLink>
            </ul>
            <div className="navbar_bottom">
                <div className="navbar_social">
                    <a target="_blank" href="https://www.facebook.com/ruslan.chudin">
                        <FIcon/>
                    </a>
                    {/*<a target="_blank" href="https://ru.linkedin.com/">*/}
                    {/*    <InIcon/>*/}
                    {/*</a>*/}
                    <a target="_blank" href="https://github.com/Rchudin">
                        <GitHubIcon/>
                    </a>
                </div>
            </div>
        </div>
    )
}