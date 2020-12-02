import { Dispatch } from "redux";
import { baseAPI } from "../../api/api";
import { SET_LIST_WORK, WorkActionTypes } from "../reducers/workReducer";

export const setListWork = (listWork: string[]): WorkActionTypes => {
    return {
        type: SET_LIST_WORK,
        listWork
    }
};

export const fetchListWork = () => async (dispatch: Dispatch): Promise<void> => {
    return baseAPI.fetchListWork()
        .then(res => {
            dispatch(setListWork([...res.data.map(({ name }: { name: any }) => name)]));
        })
        .catch(error => {
            console.log(error);
        })
};
