import * as React from "react";
import { Work } from "../../store/reducers/workReducer";

export interface DescriptionWorkProps {
    work: Work,
}

export default (props: DescriptionWorkProps) => {

    return (
        <div >
            {props.work.name}
        </div>
    )
}
