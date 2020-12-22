export const SET_LIST_WORK = "work/SET_LIST_WORK";
export const SET_LANGUAGES = "work/SET_LANGUAGES";

export type Work = {
    name: string,
    description: string | null,
    language: string | null,
    html_git_url: string | null,
    tags: string[],
}

export type WorkInitializingStateType = {
    listWork: Work[] | undefined,
    languages: string[],
}
const InitializingState: WorkInitializingStateType = {
    listWork: undefined,
    languages: [],
}

export default (state: WorkInitializingStateType = InitializingState, action: WorkActionTypes): WorkInitializingStateType => {
    switch (action.type) {
        case SET_LIST_WORK:
            return {
                ...state,
                listWork: action.listWork,
            };
        case SET_LANGUAGES:
            return {
                ...state,
                languages: action.languages,
            };
        default:
            return state;
    }
};

export type WorkActionTypes =
    SetListWork | SetLanguages

interface SetListWork {
    type: typeof SET_LIST_WORK
    listWork: Work[]
}

interface SetLanguages {
    type: typeof SET_LANGUAGES
    languages: string[]
}
