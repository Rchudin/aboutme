import * as React from "react";
import {useTranslation} from "react-i18next";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import * as s from './Feedback.module.css';
import {emailOmitemptyValidation, required} from "../../utils/validators";
import {FeedbackInput} from "../other/feedback_Input/FeedbackInput";


const Form = (props: InjectedFormProps<{}>) => {
    const {t} = useTranslation();
    return (
        <form className={s.content} onSubmit={props.handleSubmit}>
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

            {/*<Field name="email" type="email" placeholder={t('email')} validate={[required, emailValidation]}*/}
            {/*       component={InputLogin}/>*/}
            {/*<Field name="password" type="password" placeholder={t('password')} validate={[required, minLength6]}*/}
            {/*       component={InputLogin}/>*/}
            {/*<Field name="password2" type="password" placeholder={t('re-enter password')} validate={[required, minLength6]}*/}
            {/*       component={InputLogin}/>*/}


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

export default reduxForm<{}>({form: 'feedback'})(Form);

