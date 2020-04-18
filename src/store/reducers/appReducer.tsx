export const SET_IS_MOBILE = "app/SET_IS_MOBILE";

export type AppInitializingStateType = {
    isMobile: boolean
}
const InitializingState: AppInitializingStateType = {
    isMobile: false,
}

export default (state = InitializingState, action: AppActionTypes): AppInitializingStateType => {
    switch (action.type) {
        case SET_IS_MOBILE:
            return {
                ...state,
                isMobile: action.isMobile,
            };
        default:
            return state;
    }
};

export type AppActionTypes = SetIsMobileAction

interface SetIsMobileAction {
    type: typeof SET_IS_MOBILE
    isMobile: boolean
}