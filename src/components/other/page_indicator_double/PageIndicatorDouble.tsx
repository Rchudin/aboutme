import * as React from "react";
import s from './PageIndicatorDouble.module.css';


export interface PageIndicatorDoubleProps {
    page: number
}

export default (props: PageIndicatorDoubleProps) => {

    return (
        <div className={s.content} >
            <div className={`${s.numbering} ${(props.page === 1) ? "" : s.numbering_deactivated}`}>
                <label>1</label>
            </div>
            <span />
            <div className={`${s.numbering} ${(props.page === 2) ? "" : s.numbering_deactivated}`}>
                <label>2</label>
            </div>
            {/*// <div className={s.content}>*/}
            {/*//     <div className={s.left}>*/}
            {/*//         {token &&*/}
            {/*         <div className={s.slider}>*/}
            {/*             <div className={`${s.numbering} ${(page === 1) ? "" : s.numbering_deactivated}`}>*/}
            {/*                 <label>1</label>*/}
            {/*             </div>*/}
            {/*//             <span/>*/}
            {/*//             <div className={`${s.numbering} ${(page === 2) ? "" : s.numbering_deactivated}`}>*/}
            {/*//                 <label>2</label>*/}
            {/*//             </div>*/}
            {/*//         </div>*/}
            {/*//         }*/}
            {/*//*/}
            {/*//     </div>*/}
            {/*//*/}

            {/*// </div>*/}
        </div>
    )
}
