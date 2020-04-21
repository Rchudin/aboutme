export const SET_SENT = "feedback/SET_SENT";


export type FeedbackInitializingStateType = {
    sent?: string | undefined
}
const InitializingState: FeedbackInitializingStateType = {
}

export default (state = InitializingState, action: FeedbackActionTypes): FeedbackInitializingStateType => {
    switch (action.type) {
        case SET_SENT:
            return {
                ...state,
                sent: action.sent,
            };
        default:
            return state;
    }
};

export type FeedbackActionTypes =
    SetSentAction

interface SetSentAction {
    type: typeof SET_SENT
    sent: string | undefined
}

