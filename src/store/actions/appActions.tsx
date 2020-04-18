import {Dispatch} from 'redux';
import {AppActionTypes, SET_IS_MOBILE} from "../reducers/appReducer";


export const setIsMobile = (isMobile: boolean): AppActionTypes => {
    return {
        type: SET_IS_MOBILE,
        isMobile
    }
};

