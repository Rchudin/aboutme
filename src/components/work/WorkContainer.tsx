import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../store/store";
import ListWork from "./ListWork";
import { fetchListWork } from "../../store/actions/workActions";
import Unitandzero from "../other/unitandzero/Unitandzero";
import { Work } from "../../store/reducers/workReducer";
import { WorkURL } from '../../utils/routes';


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
            <Switch>
                {props.listWork.map((work: Work, i: number) => (
                    <Route
                        key={i}
                        path={`${WorkURL}/${work.name}`}
                        exact={true}
                        render={() => <div>{work.name}</div>
                        }
                    />
                ))}
                <Route
                    key={-1}
                    path={WorkURL}
                    exact={true}
                    render={() =>
                        <ListWork listWork={props.listWork} />
                    }
                />
                <Redirect to={WorkURL} />
            </Switch>
        )
    } else {
        return (
            <Unitandzero />
        )
    }
}

export default connector(ContactsContainer)
