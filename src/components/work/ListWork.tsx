import * as React from "react";
import { NavLink } from "react-router-dom";
import { Work } from "../../store/reducers/workReducer";
import s from './ListWork.module.css';
import { WorkURL } from '../../utils/routes';

export interface ListWorkProps {
    listWork: Work[],
}

export default (props: ListWorkProps) => {

    return (
        <div className={s.content}>
            {props.listWork.map((x: Work, index: number) => (
                <NavLink to={`${WorkURL}/${x.name}`} key={index} className={s.link} >
                    {x.name}
                </NavLink>
            ))}
        </div>
    )
}
