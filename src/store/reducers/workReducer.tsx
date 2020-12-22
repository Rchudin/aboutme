export const SET_LIST_WORK = "work/SET_LIST_WORK";

export type Work = {
    name: string,
    description: string | null,
    language: string | null,
    html_git_url: string | null,
    tags: string[],
}

export type WorkInitializingStateType = {
    listWork: Work[] | undefined
}
const InitializingState: WorkInitializingStateType = {
    listWork: undefined,
}

export default (state: WorkInitializingStateType = InitializingState, action: WorkActionTypes): WorkInitializingStateType => {
    switch (action.type) {
        case SET_LIST_WORK:
            return {
                ...state,
                listWork: action.listWork,
            };
        default:
            return state;
    }
};

export type WorkActionTypes =
    SetListWork

interface SetListWork {
    type: typeof SET_LIST_WORK
    listWork: Work[]
}
