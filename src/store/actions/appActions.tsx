import {AppActionTypes, SET_IS_INITIALIZED, SET_IS_MOBILE, SET_PAGE, SET_TOKEN} from "../reducers/appReducer";
import {Dispatch} from "redux";
import axios from "axios";


export const setIsMobile = (isMobile: boolean): AppActionTypes => {
    return {
        type: SET_IS_MOBILE,
        isMobile
    }
};

export const setIsInitialized = (isInitialized: boolean): AppActionTypes => {
    return {
        type: SET_IS_INITIALIZED,
        isInitialized
    }
};

export const setToken= (token: string): AppActionTypes => {
    return {
        type: SET_TOKEN,
        token
    }
};

export const setPage= (page: number | undefined): AppActionTypes => {
    return {
        type: SET_PAGE,
        page
    }
};

export const initialization = () => async (dispatch: Dispatch): Promise<void> => {
    return  axios.get(`/api/sw/account/`)
        .then(res => {
            const {token} = res.data;
            dispatch(setToken(token));
        })
        .catch(error => {
            console.log(error);
        }).finally(() => {
            dispatch(setIsInitialized(true));
        })
};