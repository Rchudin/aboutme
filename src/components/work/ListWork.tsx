import * as React from "react";
import { gitHubUrl } from "../../utils/constants";
import s from './ListWork.module.css';

export interface ListWorkProps {
    listWork: string[],
}

export default (props: ListWorkProps) => {

    return (
        <div className={s.content}>
            {props.listWork.map((x: string, index: number) => (
                <a href={`${gitHubUrl}/${x}`} key={index} className={s.link} target="_blank"> {x} </a>
            ))}
        </div>
    )
}
