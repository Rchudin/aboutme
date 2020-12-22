import * as React from "react";
import s from './LanguageSwitch.module.css';

export interface LanguageSwitchProps {
    changeLanguage: () => void
    lag: string
}

export default (props: LanguageSwitchProps) => {

    return (
        <div className={s.content} onClick={props.changeLanguage}>
            <div className={`${s.lng} ${s.deactivated}`}>
                {(props.lag === "ru") ? "en" : "ru"}
            </div>
            <span />
            <div className={s.lng}>
                {props.lag}
            </div>
        </div>
    )
}
