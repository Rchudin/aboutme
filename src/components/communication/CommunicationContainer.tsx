import * as React from "react";
import {connect, ConnectedProps} from "react-redux";
import Communication from "./Communication";
import {RootState} from "../../store/store";
import {setPage} from "../../store/actions/appActions";
import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";

const feedbackURL = "/contacts/feedback"

const mapState = (state: RootState) => {
    return {
        isInitialized: state.app.isInitialized
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

type Props = PropsFromRedux & {

}

interface State {

}

const CommunicationContainer = (props: Props, state: State) => {
    useEffect(() => {
        props.setPage(1)
    }, []);

    const history = useHistory();
    const [copyEmail, setCopyEmail] = useState(false);
    const [copyTelegram, setCopyTelegram] = useState(false);

    const onClickEmail = () => {
        setCopyEmail(true);
        setTimeout(() => setCopyEmail(false), 800);
    };

    const onClickTelegram = () => {
        setCopyTelegram(true);
        setTimeout(() => setCopyTelegram(false), 800);
    };

    const wheel = (e: any) :void=> {
        console.log(e)
        const delta = e.deltaY || e.detail || e.wheelDelta;
        if (delta > 0){
            history.push(feedbackURL);
        }
    }

    return <Communication copyEmail={copyEmail}
                          copyTelegram={copyTelegram}
                          feedbackURL={feedbackURL}
                          onClickEmail={onClickEmail}
                          onClickTelegram={onClickTelegram}
                          isInitialized={props.isInitialized}
                          wheel={wheel}/>
}




export default connector(CommunicationContainer)