import * as React from "react";
import {connect, ConnectedProps} from "react-redux";
import { Redirect } from "react-router-dom";
import Feedback from "./Feedback";
import {RootState} from "../../store/store";
import {useEffect} from "react";
import {setPage} from "../../store/actions/appActions";

const mapState = (state: RootState) => {
    return {
        isInitialized : state.app.isInitialized,
        token: state.app.token,
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
    setPage: (i: number) => void
}

const FeedbackContainer = (props: Props) => {
    useEffect(() => {
        props.setPage(2)
    }, []);

    if (props.token) {
        return <Feedback />
    }else{
        if (props.isInitialized) {
            return <Redirect to={"/contacts"}/>
        }
        return <></>
    }
}
export default connector(FeedbackContainer)



