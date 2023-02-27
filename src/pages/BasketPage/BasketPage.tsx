import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import BasketFull from "../../components/BasketFull/BasketFull";
import {Link} from "react-router-dom";
import styles from "./BasketPage.module.css"

const BasketPage = () => {
    const {itemArr} = useTypedSelector(state => state.basket);
    let isFull = itemArr.length;
    return (
        isFull === 0 ?
            <div className={styles.body}>
                <h2 className={styles.title}>Корзина порожня, будь ласка перейдіть на сторінку з товарами і покладіть щось в корзинку</h2>
                <Link to={"/"}>
                    <button className={styles.btn}>Купити щось</button>
                </Link>
            </div>
            :
            <div>
                <BasketFull />
            </div>
    );
};

export default BasketPage;