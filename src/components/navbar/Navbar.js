import React from "react";
import "./Navbar.css"
import {GitHubIcon, InIcon} from "../icons/icons";
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";

export default ({lng, selected}) => {
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
                    <span className={`navbar_lng ${(lng && lng === "ru") ? "" : "navbar_lng_deactivated"}`}
                          onClick={changeLanguage}>
                        {(i18n.language === "ru") ? "en" : "ru"}
                    </span>
                    <div/>
                    <span className={`navbar_lng ${(!lng || lng === "en") ? "" : "navbar_lng_deactivated"}`}>
                        {i18n.language}
                    </span>
                </div>
            </div>
            <ul className="navbar_middle">
                <li className={`navbar_li ${(selected && selected === "about") ? "navbar_li_selected" : ""}`}>
                    <div/>
                    <span>{t('about')}</span>
                </li>
                <li className={`navbar_li ${(selected && selected === "projects") ? "navbar_li_selected" : ""}`}>
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
                    <a target="_blank" href="https://ru.linkedin.com/">
                        <InIcon/>
                    </a>
                    <a target="_blank" href="https://github.com/Rchudin">
                        <GitHubIcon/>
                    </a>
                </div>
            </div>
        </div>
    )
}