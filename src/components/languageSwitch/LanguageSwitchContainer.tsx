import * as React from "react";
import Cookies from 'js-cookie';
import {useEffect} from "react";
import {useTranslation} from "react-i18next";
import LanguageSwitch from "./LanguageSwitch";


export default () => {
    const {t, i18n} = useTranslation();

    useEffect(() => {
        const languageUsed = document.documentElement.lang;
        const lng = Cookies.get('language');
        if (languageUsed !== lng && (lng === "en" || lng === "ru")) {
            document.querySelector('html').setAttribute('lang', lng);
            // i18n.changeLanguage(lng).then();
        }
    }, []);

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

    return (
        <LanguageSwitch changeLanguage={changeLanguage} lag={i18n.language}/>
    )
}






