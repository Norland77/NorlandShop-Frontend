import React from 'react';
import styles from './Card.module.css';
import { useDispatch } from "react-redux";

type RequestType = {
    price: string | null;
    name: string;
    vendorCode: string;
    pictures: string;
    isActive: boolean;
};

const Card = ({ price, name, vendorCode, pictures, isActive }: RequestType) => {
    const dispatch = useDispatch();
    const itemArr: (string | boolean | null)[] = [pictures, price, name, vendorCode, true];
    return (
        <div className={styles.body}>
            <img className={styles.img} src={pictures} alt="" />
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.Code}>код: {vendorCode}</p>
            <p className={styles.price}>{price} грн</p>
            <button onClick={() => {dispatch({type: "SET_MODAL", payload: itemArr})}} className={styles.btn}>
                Придбати
            </button>
        </div>
    );
};

export { Card };
