import {Dispatch} from "redux";
import axios from "axios";
import {RootState} from "../store";
import {FeedbackActionTypes, SET_SENT} from "../reducers/feedbackReducer";
import {baseAPI} from "../../api/api";


export const setSent = (sent: string | undefined): FeedbackActionTypes => {
    return {
        type: SET_SENT,
        sent
    }
};

export const feedback = ( body:FormData) => async (dispatch: Dispatch, getState: () => RootState ): Promise<void> => {
    const s = getState();
    // return await new Promise(resolve => setTimeout(resolve, 20000));
    return baseAPI.feedback(body, s.app.token)
        .then(res => {
            dispatch(setSent("ok"));
        })
        .catch(error => {
            alert(error.message);
            dispatch(setSent(error.message));
        });
};

