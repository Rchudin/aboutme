import * as React from "react";
import { connect, ConnectedProps } from "react-redux";
import Communication from "./Communication";
import { RootState } from "../../store/store";
import { setPage } from "../../store/actions/appActions";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const feedbackURL = "/contacts/feedback"

const mapState = (state: RootState) => {
    return {
        token: state.app.token
    }
};

const mapDispatch = {
    setPage
};

const connector = connect(
    mapState,
    mapDispatch
);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {}


const CommunicationContainer = (props: Props) => {
    useEffect(() => {
        props.setPage(1)
    }, []);

    const history = useHistory();
    const [copyEmail, setCopyEmail] = useState(false);
    const [copyTelegram, setCopyTelegram] = useState(false);
    const [ts, setTs] = useState(0);

    const onClickEmail = () => {
        setCopyEmail(true);
        setTimeout(() => setCopyEmail(false), 800);
    };

    const onClickTelegram = () => {
        setCopyTelegram(true);
        setTimeout(() => setCopyTelegram(false), 800);
    };

    const wheel = (e: any): void => {
        if (props.token) {
            const delta = e.deltaY || e.detail || e.wheelDelta;
            if (delta > 0) {
                history.push(feedbackURL);
            }
        }
    }

    const touchstart = (e: any): void => {
        if (props.token) {
            setTs(e.touches[0].clientY);
        }
    }

    const touchend = (e: any): void => {
        if (props.token) {
            const te = e.changedTouches[0].clientY;
            if (ts > te + 5) {
                history.push(feedbackURL);
            }
            //  else if(ts < te-5){
            //     history.push(feedbackURL);
            // }
        }

    }
    return <Communication copyEmail={copyEmail}
        copyTelegram={copyTelegram}
        feedbackURL={feedbackURL}
        onClickEmail={onClickEmail}
        onClickTelegram={onClickTelegram}
        token={props.token}
        wheel={wheel}
        touchstart={touchstart}
        touchend={touchend} />
}


export default connector(CommunicationContainer)
