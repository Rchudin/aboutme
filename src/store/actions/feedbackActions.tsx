import {Dispatch} from "redux";
import axios from "axios";
import {RootState} from "../store";
import {FeedbackActionTypes, SET_SENT} from "../reducers/feedbackReducer";


export const setSent = (sent: string | undefined): FeedbackActionTypes => {
    return {
        type: SET_SENT,
        sent
    }
};

export const feedback = ( body:FormData) => async (dispatch: Dispatch, getState: () => RootState ): Promise<void> => {
    const s = getState();
    // return await new Promise(resolve => setTimeout(resolve, 20000));
    return  axios({
        url: '/api/sw/feedback/',
        method: 'POST',
        data: body,
        headers: {
            'X-CSRF-Token': s.app.token,
            'Content-Type': 'multipart/form-data',
        },
    })
        .then(res => {
            dispatch(setSent("ok"));
        })
        .catch(error => {
            alert(error.message);
            dispatch(setSent(error.message));
        });
};