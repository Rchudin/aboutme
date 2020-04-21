import * as React from "react";
import {useTranslation} from "react-i18next";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import * as s from './Feedback.module.css';
import {emailOmitemptyValidation, maxLengthCreator, required} from "../../utils/validators";
import {FeedbackInput} from "../other/feedback_Input/FeedbackInput";
import {FeedbackTextarea} from "../other/feedback_textarea/FeedbackTextarea";

const maxLength3000 = maxLengthCreator(3000);

interface FormProps {
    file: string | undefined
    onChangeFileHandler: (e:any) => void
    clearFile: () => void
}

const Form = (props: FormProps &  InjectedFormProps<{}>) => {
    const {t} = useTranslation();
    return (
        <form className={s.content} onSubmit={props.handleSubmit}>
            <p className={s.header}>{t("contact me")}</p>
            <div className={s.inputs}>
                <div className={s.double}>
                    <Field
                        name="subject"
                        type="value"
                        placeholder={t("Subject")}
                        component={FeedbackInput}
                        validate={[required]}
                    />
                    <Field
                        name="username"
                        type="value"
                        placeholder={t("Username")}
                        component={FeedbackInput}
                        validate={[required]}/>
                </div>
                <div className={s.double}>
                    <Field
                        name="email"
                        type="email"
                        placeholder={t("Email")}
                        component={FeedbackInput}
                        validate={[emailOmitemptyValidation,]}
                    />
                    <Field name="phone"
                           type="phone"
                           placeholder={t("Phone number")}
                           component={FeedbackInput}
                           validate={[]}/>
                </div>
            </div>
            <div className={s.letter}>
                <div className={s.letter_header}><label>{t("Message")}</label></div>
                <Field name="message"
                       type="value"
                       component={FeedbackTextarea}
                       validate={[maxLength3000]}/>
            </div>
            <div className={s.send_frame}>
                <button className={s.send} onClick={props.handleSubmit}>
                    {t("Send")}
                </button>
                <div className={s.file_frame}>
                    {
                        !props.file ?
                            <>
                                <label htmlFor="file_upload">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                         viewBox="0 0 24 24">
                                        <path fill="none" d="M0 0h24v24H0V0z"/>
                                        <path
                                            d="M12.5 23c3.04 0 5.5-2.46 5.5-5.5V6h-1.5v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5z"/>
                                    </svg>
                                </label>
                                <input id="file_upload" name="file" type="file" onChange={props.onChangeFileHandler}/>
                            </> :
                            <div className={s.file_close} onClick={props.clearFile}>
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

            {/*<div className={styles.submit}>*/}
            {/*    <button type="submit">*/}
            {/*        {!submitting ?*/}
            {/*            t('Join'):*/}
            {/*            <LdsRoller />*/}
            {/*        }*/}
            {/*    </button>*/}
            {/*</div>*/}

        </form>
    )
};

export default reduxForm<{}, FormProps>({form: 'feedback'})(Form);

