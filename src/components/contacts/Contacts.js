import React, {useState} from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {useTranslation} from "react-i18next";
import "./Contacts.css"

const number = "+7 (926) 439 96 16";
const email = "ruslan.chudin@yandex.ru";

export default () => {
    const {t} = useTranslation();
    const [copyEmail, setCopyEmail] = useState(false);
    const [copyNumber, setCopyNumber] = useState(false);


    const onClickEmail = () => {
        setCopyEmail(true);
        setTimeout(() => setCopyEmail(false), 800);
    };

    const onClickNumber = () => {
        setCopyNumber(true);
        setTimeout(() => setCopyNumber(false), 800);
    };



    return (
        <div className="contacts">
            <div className={"between_flex"}/>
            <div className={"contacts_main"}>
                <div className="contacts_main_1">{t('CONTACTS.get in touch')}</div>
                <div className={"contacts_main_2"}>
                    {t('CONTACTS.let\'s build something')}
                    <br/>
                    {t('CONTACTS.great together')}
                </div>
            </div>
            <div className={"between_flex"}/>
            <div className={"contacts_data"}>
                <CopyToClipboard text={email}>
                    <div className={"contacts_data_li"} onClick={onClickEmail}>
                        <span>
                            {email}
                            {
                                copyEmail && <span className={"contacts_tooltip_text"}>
                                     {t('copied')}
                                </span>
                            }

                        </span>
                    </div>
                </CopyToClipboard>
                <CopyToClipboard text={number}>
                    <div className={"contacts_data_li"} onClick={onClickNumber}>
                        <span>
                            {number}
                            {
                                copyNumber && <span className={"contacts_tooltip_text"}>
                                     {t('copied')}
                                </span>
                            }
                        </span>
                    </div>
                </CopyToClipboard>
                <a target="_blank" href="https://t.me/rchudin" className={"contacts_data_li"}>
                    <span>telegram</span>
                </a>
            </div>
        </div>
    )
}