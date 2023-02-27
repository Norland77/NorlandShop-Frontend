import React, {useState} from 'react';
import styles from './Header.module.css'
import NavBtn from "../../UI/NavBtn/NavBtn";
import logo from "../../img/Logo.svg"
import basket from "../../img/basket.svg"
import {Link, Outlet} from "react-router-dom";
import Popup from "../Popup/Popup";


const Header = () => {
    return (
        <div className={styles.body}>
            <div className={styles.main}>
                <Link to="/">
                    <img className={styles.logo} src={logo} alt=""/>
                </Link>
                <NavBtn title={"Посуд"} link={"/dishes"}></NavBtn>
                <NavBtn title={"Гаджети"} link={"/gadgets"}></NavBtn>
                <NavBtn title={"Аксесуари"} link={"/accessories"}></NavBtn>
                <NavBtn title={"Набори"} link={"/sets"}></NavBtn>
                <NavBtn title={"Сувенірка"} link={"/souvenir"}></NavBtn>
                <Link className={styles.basket_btn} to={"/basket"}>
                    <img src={basket} alt=""/>
                </Link>
            </div>
            <Outlet></Outlet>
            <Popup/>
        </div>
    );
};

export default Header;