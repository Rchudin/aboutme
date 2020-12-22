import { Dispatch } from "redux";
import { baseAPI } from "../../api/api";
import { SET_LIST_WORK, WorkActionTypes, Work } from "../reducers/workReducer";

export const setListWork = (listWork: Work[]): WorkActionTypes => {
    return {
        type: SET_LIST_WORK,
        listWork
    }
};

export const fetchListWork = () => async (dispatch: Dispatch): Promise<void> => {
    let githubRepositories: Work[] = [];
    let github = baseAPI.fetchGithubRepositories().then(res => {
        res.data.map(({ name, description, html_url, language, topics }:
            { name: string, description: string | null, html_url: string, language: string | null, topics: string[] }) => {
            githubRepositories.push({
                name: name,
                description: description,
                language: language,
                html_git_url: html_url,
                tags: topics,
            })
        })
    }).catch(error => {
        console.log(error);
    })

    Promise.all([github]).then(
        () => {
            // work.sort((a: Work, b: Work) => {
            //     let nameA = a.name.toUpperCase();
            //     let nameB = b.name.toUpperCase();
            //     if (nameA < nameB) {
            //         return -1;
            //     }
            //     if (nameA > nameB) {
            //         return 1;
            //     }
            //     return 0;
            // });
            dispatch(setListWork([].concat(githubRepositories)));
        }
    )
};
