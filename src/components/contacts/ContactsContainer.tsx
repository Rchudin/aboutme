import * as React from "react";
import {connect, ConnectedProps} from "react-redux";
import {RootState} from "../../store/store";
import {routeType} from "../../utils/routes";
import Contacts from "./Contacts";


const mapState = (state: RootState) => {
    return {
        token: state.app.token,
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
                  token={props.token}
                  routes={props.routes}/>
    )
}

export default connector(ContactsContainer)