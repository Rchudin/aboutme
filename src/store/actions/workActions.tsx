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
    let work: Work[] = [];
    let github = baseAPI.fetchListWork().then(res => {
        res.data.map(({ name, description }: { name: string, description: string | null }) => {
            work.push({
                name: name,
                description: description,
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
            dispatch(setListWork(work));
        }
    )
};
