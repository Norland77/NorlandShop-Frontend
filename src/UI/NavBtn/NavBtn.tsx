import React from 'react';
import styles from "./NavBtn.module.css";
import "./NavLink.css";
import {Link} from "react-router-dom";

interface PropsName {
    title : string,
    link : string
}
const NavBtn = ({title, link} : PropsName) => {
    return (
        <div className={styles.body}>
            <Link className={styles.link} to={link}>
                {title}
            </Link>
        </div>
    );
};

export default NavBtn;