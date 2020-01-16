import React from 'react';
import s from "./SendMessage.module.css"
import {useTranslation} from "react-i18next";
import FeedbackGroupInput from "../feedback_group_input/FeedbackGroupInput";


export default ({
                    feedback, handleInputChange, onChangeFileHandler, clearFile,
                    subject, username, email, phone, file, message,
                    errUsername, errSubject, errMessage

                }) => {
    const {t} = useTranslation();


    return (
        <div className={s.content}>
            <div className={s.main}>
                <p className={s.header}>{t("contact me")}</p>
                <div className={s.details}>
                    <div className={s.details_frame}>
                        <FeedbackGroupInput key={1}
                                            name={"subject"}
                                            type={"value"}
                                            value={subject}
                                            isErr={errSubject}
                                            handleInputChange={handleInputChange}
                                            placeholder={t("Subject")}/>
                        <FeedbackGroupInput key={2}
                                            name={"username"}
                                            type={"value"}
                                            value={username}
                                            isErr={errUsername}
                                            handleInputChange={handleInputChange}
                                            placeholder={t("Username")}/>
                    </div>
                    <div className={s.details_frame}>
                        <FeedbackGroupInput key={3}
                                            name={"email"}
                                            type={"email"}
                                            value={email}
                                            handleInputChange={handleInputChange}
                                            placeholder={t("Email")}/>
                        <FeedbackGroupInput key={4}
                                            name={"phone"}
                                            type={"value"}
                                            value={phone}
                                            handleInputChange={handleInputChange}
                                            placeholder={t("Phone number")}/>
                    </div>
                </div>
                <div className={s.letter}>
                    <label>{t("Message")}</label>
                    <textarea name={"message"}
                              value={message}
                              className={!errMessage ? s.letter_textarea:s.letter_textarea_err}
                              onChange={handleInputChange}/>
                    <div className={s.count_message}>
                        {message.length}/3000
                    </div>
                    <div className={s.send_frame}>
                        <button className={s.send} onClick={feedback}>
                            {t("Send")}
                        </button>

                        <div className={s.input_file_frame}>
                            {
                                !file ?
                                    <>
                                        <label htmlFor="file_upload">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24">
                                                <path fill="none" d="M0 0h24v24H0V0z"/>
                                                <path
                                                    d="M12.5 23c3.04 0 5.5-2.46 5.5-5.5V6h-1.5v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5z"/>
                                            </svg>
                                        </label>
                                        <input id="file_upload" name="file" type="file" onChange={onChangeFileHandler}/>
                                    </> :
                                    <div className={s.file_upload_close} onClick={clearFile}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM6 20V4H13V9H18V20H6Z"
                                                fill="black"/>
                                            <path
                                                d="M16 10.8057L15.1943 10L12 13.1943L8.80571 10L8 10.8057L11.1943 14L8 17.1943L8.80571 18L12 14.8057L15.1943 18L16 17.1943L12.8057 14L16 10.8057Z"
                                                fill="black"/>
                                        </svg>
                                    </div>
                            }
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}