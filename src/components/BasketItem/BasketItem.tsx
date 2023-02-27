import React, {useState} from 'react';
import Counter from "../../UI/Counter/Counter";
import styles from "./BasketItem.module.css"
import basket from "../../img/trashbin.svg";
import like from "../../img/like.svg";
import { useDispatch } from "react-redux";

type Props = {
    img: string;
    name: string;
    price: string;
    vendorCode: string;
}

const BasketItem = ({ img, name, price, vendorCode }: Props) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState<number>(1); // Initialize quantity as 1
    function deleteItem() {
        dispatch({type: "REMOVE_ITEM", payload: vendorCode});
    }
    function updateQuantity(value: number) {
        setQuantity(value);
        dispatch({type: "UPDATE_QUANTITY", payload: {vendorCode, quantity: value}});
    }
    return (
        <div className={styles.body}>
            <div className={styles.leftSide}>
                <img className={styles.img} src={img} alt=""/>
                <div className={styles.nameBlock}>
                    <h2 className={styles.name}>{name}</h2>
                </div>
                <div className={styles.btnBlock}>
                    <button onClick={() => {deleteItem()}} className={styles.btn}><img className={styles.btnImg} src={basket} alt=""/></button>
                    <button className={styles.btn}><img className={styles.btnImg} src={like} alt=""/></button>
                </div>
                <p className={styles.price}>{price} грн</p>
                <div className={styles.counterBBlock}>
                    <Counter value={quantity} min={1} max={10} onChange={setQuantity} onBlur={() => updateQuantity(quantity)}/>
                </div>
            </div>
            <div className={styles.rightSide}>
                <p className={styles.price}>{Number(price) * quantity} грн</p>
            </div>
        </div>
    );
};

export default BasketItem;