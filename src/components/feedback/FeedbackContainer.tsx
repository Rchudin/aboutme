import * as React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Redirect } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Feedback from "./Feedback";
import { RootState } from "../../store/store";
import { useEffect, useState } from "react";
import { setPage } from "../../store/actions/appActions";
import { feedback, setSent } from "../../store/actions/feedbackActions";
import s from './Feedback.module.css';
import { log } from "util";

const mapState = (state: RootState) => {
    return {
        isInitialized: state.app.isInitialized,
        token: state.app.token,
        sent: state.feedback.sent,
    }
};

const mapDispatch = {
    setPage,
    feedback,
    setSent,
};

const connector = connect(
    mapState,
    mapDispatch
);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {
    setPage: (i: number) => void
}

interface State {

}

const FeedbackContainer = (props: Props, state: State) => {
    const { t } = useTranslation();
    useEffect(() => {
        props.setPage(2)
        props.setSent(undefined);
    }, []);

    const [file, setFile] = useState(undefined);
    const clearFile = () => {
        setFile(undefined);
    };

    const onChangeFileHandler = (event: any) => {
        const upload_file = event.target.files[0];
        const reader = new FileReader();

        if (upload_file.size > Math.pow(1024, 2) * 3) {
            alert(t("file size is too large"));
            console.log(t("file size is too large"));
            event.target.value = null;
            return
        }

        if (upload_file) {
            reader.readAsDataURL(upload_file);
        }

        setFile(upload_file);
        // reader.onloadend = function () {
        //     this.setState({
        //         selectPicture: [reader.result],
        //     })
        // }.bind(this);
    };

    const onSubmit = (data: any): Promise<void> => {
        const body: FormData = new FormData();

        body.append('subject', data.subject);
        body.append('username', data.username);
        data.email && body.append('email', data.email);
        data.phone && body.append('phone', data.phone);
        data.message && body.append('message', data.message);
        file && body.append('file', file);

        return props.feedback(body);
    };

    if (props.token) {
        if (props.sent && props.sent === "ok") {
            return (
                <div className={s.sent_message}>
                    <label>{t("Message sent successfully")}</label>
                </div>
            )
        }
        return <Feedback onSubmit={onSubmit}
            file={file}
            clearFile={clearFile}
            onChangeFileHandler={onChangeFileHandler} />
    } else {
        if (props.isInitialized) {
            return <Redirect to={"/contacts"} />
        }
        return <></>
    }
}
export default connector(FeedbackContainer)
