
import {Dispatch} from "redux";
import axios from "axios";
import {RootState} from "../store";


export const feedback = ( body:FormData) => async (dispatch: Dispatch, getState: () => RootState ): Promise<void> => {

    const s = getState();
    // return await new Promise(resolve => setTimeout(resolve, 2000));
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
            // const data = res.data;
            // console.log(data);
        })
        .catch(error => {
            //console.log(error);
        });
};