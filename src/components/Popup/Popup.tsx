import React, {FC} from 'react';
import "./Popup.css"
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import Counter from "../../UI/Counter/Counter";
const Popup: FC = () => {
    const {isActive} = useTypedSelector(state => state.modal);
    const dispatch = useDispatch();
    function closeModal() {
        dispatch({type: "SET_MODAL", payload: false});
        dispatch({type: "SET_COUNT", payload: 0});
    }
    function addOrder() {
        dispatch({type: "ADD_ITEM", payload: itemArr});
        dispatch({type: "SET_MODAL", payload: false});
    }
    let itemArr = {
        name: "",
        price: "",
        img: "",
        vendorCode: ""
    };
    console.log(isActive);
    itemArr.name = isActive[2]
    itemArr.price = isActive[1]
    itemArr.img = isActive[0]
    itemArr.vendorCode = isActive[3]
    return (
        <div className={isActive ? "modal activeMod" : "modal"} onClick={() => {closeModal()}}>
            <div className={isActive ? "modal__content activeMod" : "modal__content"} onClick={e => e.stopPropagation()}>
                <div className={"leftBlock"}>
                    <img className={"img_"} src={isActive[0]} alt={isActive[2]}/>
                    <h3 className={"name_"}>{isActive[2]}</h3>
                    <p className={"Code_"}>код: {isActive[3]}</p>
                    <p className={"price_"}>{isActive[1]} грн</p>
                </div>
                <div className={"rightBlock"}>
                    <button className={"orderBtn"}>Оформити заказ</button>
                    <button onClick={() => {addOrder();}} className={"orderBtn"}>Додати в корзину</button>
                </div>
            </div>
        </div>
    );
};

export default Popup;