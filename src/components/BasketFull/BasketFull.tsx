import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import BasketItem from "../BasketItem/BasketItem";
import styles from "./BasketFull.module.css"

const BasketFull = () => {
    const {itemArr} = useTypedSelector(state => state.basket);

    const listItems = itemArr.map((item) =>
        <BasketItem img={item.img} price={item.price} name={item.name} vendorCode={item.vendorCode}></BasketItem>
    );
    console.log(listItems);
    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <h2>Кошик</h2>
                <h2 className={styles.priceTxt}>Ціна</h2>
            </div>
            <div>
                {listItems}
            </div>
            <div className={styles.footerBody}>
                <div className={styles.formBlock}>
                    <form className={styles.form} action={""} method={"get"}>
                        <div className={styles.formInner}>
                            <input className={styles.formInput} type="text" name={"coupon"} id={"coupon"} placeholder={"Введіть код купона"}/>
                            <input className={styles.formBtn} type="submit" value={"Застосувати"}/>
                        </div>
                    </form>
                </div>
                <div className={styles.priceBlock}>
                    <div className={styles.priceFirst}>
                        <p className={styles.priceTitle}>Разом</p>
                        <p className={styles.priceTitle}>Всього</p>
                    </div>
                    <div className={styles.priceSecond}>
                        <p className={styles.priceTotal}>1750 грн</p>
                        <p className={styles.priceTotal}>1750 грн</p>
                    </div>
                </div>
            </div>
            <div className={styles.orderBtnBlock}>
                <form action="" method={"get"}>
                    <input className={styles.orderBtn} type="submit" value={"Оформити замовлення"}/>
                </form>
            </div>
        </div>
    );
};

export default BasketFull;