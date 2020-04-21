import * as React from "react";
import * as s from './SocialLinks.module.css';
import {gitHubUrl, instagramUrl, linkedInUrl} from "../../utils/constants";
import linkedInIcon from "../../assets/svg/linkedin.svg"
import githubIcon from "../../assets/svg/github.svg"
import instagramIcon from "../../assets/svg/inst.svg"


export interface SocialLinksProps {

}

export default (props: SocialLinksProps) => {
    return (
        <div className={s.content}>
            <a target="_blank" className={s.link} href={instagramUrl}>
                <img alt="Instagram" src={instagramIcon}/>
            </a>
            {/*<a target="_blank" className={s.link} href={linkedInUrl}>*/}
            {/*    <img alt="LinkedIn" src={linkedInIcon}/>*/}
            {/*</a>*/}
            <a target="_blank" className={s.link} href={gitHubUrl}>
                <img alt="GitHub" src={githubIcon}/>
            </a>
        </div>
    )
};