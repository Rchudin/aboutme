export const SET_IS_MOBILE = "app/SET_IS_MOBILE";
export const SET_IS_INITIALIZED = "app/SET_IS_INITIALIZED";
export const SET_TOKEN = "app/SET_TOKEN";
export const SET_PAGE = "app/SET_PAGE";


export type AppInitializingStateType = {
    isMobile: boolean
    isInitialized: boolean
    token?: string | undefined
    page?: number | undefined
}
const InitializingState: AppInitializingStateType = {
    isMobile: false,
    isInitialized: false,
}

export default (state = InitializingState, action: AppActionTypes): AppInitializingStateType => {
    switch (action.type) {
        case SET_IS_MOBILE:
            return {
                ...state,
                isMobile: action.isMobile,
            };
        case SET_IS_INITIALIZED:
            return {
                ...state,
                isInitialized: action.isInitialized,
            };
        case SET_TOKEN:
            return {
                ...state,
                token: action.token,
            };
        case SET_PAGE:
            return {
                ...state,
                page: action.page,
            };
        default:
            return state;
    }
};

export type AppActionTypes =
    SetIsMobileAction |
    SetIsInitializedAction |
    SetToken|
    SetPage

interface SetIsMobileAction {
    type: typeof SET_IS_MOBILE
    isMobile: boolean
}

interface SetIsInitializedAction {
    type: typeof SET_IS_INITIALIZED
    isInitialized: boolean
}
interface SetToken {
    type: typeof SET_TOKEN
    token: string | undefined
}

interface SetPage {
    type: typeof SET_PAGE
    page: number | undefined
}