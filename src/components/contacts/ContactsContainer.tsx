import * as React from "react";
import {connect, ConnectedProps} from "react-redux";
import {RootState} from "../../store/store";
import {routeType} from "../../utils/routes";
import Contacts from "./Contacts";


const mapState = (state: RootState) => {
    return {
        isInitialized: state.app.isInitialized,
        page: state.app.page,
    }
};

const mapDispatch = {
    // setIsMobile
};

const connector = connect(
    mapState,
    mapDispatch
);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {
    routes: routeType[]
}

interface State {

}

const ContactsContainer = (props: Props, state: State) => {

    return (
        <Contacts page={props.page}
                  isInitialized={props.isInitialized}
                  routes={props.routes}/>
    )
}

export default connector(ContactsContainer)