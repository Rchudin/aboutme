import * as React from "react";
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Work } from "../../store/reducers/workReducer";
import s from './ListWork.module.css';
import { WorkURL } from '../../utils/routes';

export interface ListWorkProps {
    listWork: Work[],
    programLang: string[],
}

export default (props: ListWorkProps) => {
    const [filter, setFilter] = useState(null);

    const onClickFilter = (lng: String) => {
        if (filter === lng) {
            setFilter(null);
        } else {
            setFilter(lng)
        }
    };

    return (
        <div className={s.content}>
            <div className={s.list_filters}>
                {props.programLang.map((x: string, index: number) => (
                    <div key={index} className={`${s.filter} ${filter === x ? s.filter_active : ""} ${filter && filter !== x ? s.filter_deactivate : ""}`}
                        onClick={() => { onClickFilter(x) }}>
                        {x}
                    </div>
                ))}
            </div>
            {props.listWork.map((x: Work, index: number) => {
                if (filter === null || filter === x.language) {
                    return (
                        <NavLink to={`${WorkURL}/${x.name}`} key={index} className={s.link} >
                            {x.name}
                        </NavLink>
                    )
                }
            })}
        </div>
    )
}
