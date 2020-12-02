import * as React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../store/store";
import ListWork from "./ListWork";
import { fetchListWork } from "../../store/actions/workActions";
import Unitandzero from "../other/unitandzero/Unitandzero";


const mapState = (state: RootState) => {
    return {
        listWork: state.work.listWork,
    }
};

const mapDispatch = {
    fetchListWork
};

const connector = connect(
    mapState,
    mapDispatch
);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {}

interface State { }

const ContactsContainer = (props: Props, state: State) => {
    if (!props.listWork) {
        props.fetchListWork();
        return (
            <></>
        )
    }
    if (props.listWork && props.listWork.length > 0) {
        return (
            <ListWork listWork={props.listWork} />
        )
    } else {
        return (
            <Unitandzero />
        )
    }
}

export default connector(ContactsContainer)
