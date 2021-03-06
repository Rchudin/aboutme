import * as React from "react";
import { NavLink } from "react-router-dom";
import CopyToClipboard from "react-copy-to-clipboard";
import s from './Communication.module.css';
import { email, linkedInUrl } from "../../utils/constants";
import { useTranslation } from "react-i18next";


export interface CommunicationProps {
    token: string | undefined
    copyEmail: boolean
    copyTelegram: boolean
    feedbackURL: string
    onClickEmail: () => void
    onClickTelegram: () => void
    wheel: (e: any) => void
    touchstart: (e: any) => void
    touchend: (e: any) => void
}

export default (props: CommunicationProps) => {
    const { t } = useTranslation();

    return (
        <div className={s.content} onWheel={props.wheel} onTouchStart={props.touchstart} onTouchEnd={props.touchend}>
            <div className={s.main}>
                <label className={s.header}>{t('get in touch')}</label>
                <label className={s.text}>{t("let's build something great together")}</label>
            </div>
            <div className={s.block_links}>
                <CopyToClipboard text={email}>
                    <div className={s.link} onClick={props.onClickEmail}>
                        {email}
                        {
                            props.copyEmail && (
                                <span className={s.tooltip}>
                                    {t('copied')}
                                </span>
                            )
                        }
                    </div>
                </CopyToClipboard>
                <a target="_blank" href={linkedInUrl}>
                    <div className={s.link}>linkedin</div>
                </a>
            </div>


            <div className={s.pagination}>
                {props.token && (
                    <NavLink to={props.feedbackURL} className={s.pagination}>
                        <ArrowDown />
                    </NavLink>
                )}
            </div>
        </div>
    )
}

const ArrowDown = () => (
    <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.9975 0L8.5 6.18084L15.0025 0L17 1.90283L8.5 10L0 1.90283L1.9975 0Z"
            fill="white" />
    </svg>
)
