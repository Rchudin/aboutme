import { Dispatch } from "redux";
import { baseAPI } from "../../api/api";
import { SET_LIST_WORK, SET_LANGUAGES, WorkActionTypes, Work } from "../reducers/workReducer";
import { shortNameProgramLang } from "../../utils/constants";

export const setListWork = (listWork: Work[]): WorkActionTypes => {
    return {
        type: SET_LIST_WORK,
        listWork
    }
};

export const setLanguages = (languages: string[]): WorkActionTypes => {
    return {
        type: SET_LANGUAGES,
        languages
    }
};

export const fetchListWork = () => async (dispatch: Dispatch): Promise<void> => {
    let githubRepositories: Work[] = [];
    let github = baseAPI.fetchGithubRepositories().then(res => {
        res.data.map(({ name, description, html_url, language, topics }:
            { name: string, description: string | null, html_url: string, language: string | null, topics: string[] }) => {
            language = shortNameProgramLang(language);
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
            let work: Work[] = [];
            work = work.concat(githubRepositories);
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

            dispatch(setListWork(work));

            let languages: string[] = ["C++", "Rust"];
            for (let x of work) {
                if (!languages.includes(x.language)) {
                    languages.push(x.language);
                }
            }
            dispatch(setLanguages(languages));
        }
    )
};
