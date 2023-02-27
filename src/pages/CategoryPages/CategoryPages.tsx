import React, {useEffect, useState} from 'react';
import styles from './CategoryPages.module.css';
import {Card} from "../../components/Card/Card";

interface requestType {
    price : string | null,
    name : string,
    vendorCode: string,
    pictures: string,
    setActive: any
}

interface propsTypes {
    idCategory: string,
}

const CategoryPages = (props: propsTypes) => {

    const [OfferArr, setItemArr] = useState<requestType[]>([
        {
            price: ``,
            name: "",
            vendorCode: "",
            pictures: "",
            setActive: false
        }
    ]);
    const [indexCard, setIndexCard] = useState(0);
    const [maxIndexCards, setMaxIndexCards] = useState(0);
    const [isDisablePrev, setIsDisablePrev] = useState(true);
    const [isDisableNext, setIsDisableNext] = useState(false);

    /*useEffect(() => {
        getOffer(indexCard);
    }, [])*/
    getOffer(indexCard);
    function getOffer(index: number) {
        const requestURL = "http://localhost:8080/https://ziz.ua/system/storage/download/partnerzizukr.xml";
        fetch(requestURL).then((response) => {
            response.text().then((xml) => {
                let parser = new DOMParser();
                let xmlDOM = parser.parseFromString(xml, 'application/xml');
                let offer = xmlDOM.querySelectorAll("offer");
                let category = xmlDOM.querySelectorAll("category");
                console.log(category);
                console.log(offer);
                let arrDish: Array<any>;
                arrDish = [];
                offer.forEach(el => {
                    if (el.querySelector("categoryId")?.innerHTML === props.idCategory) {
                        arrDish.push(el);
                    }
                })
                let newArr = [];
                if (arrDish.length < 9) {
                    setIsDisableNext(true);
                }
                let pages = arrDish.length / 8 - 1;
                let maxCards = pages * 8;
                setMaxIndexCards(maxCards);
                for (let i = index; i < index + 8; i++) {
                    let name = arrDish[i].querySelector("name");
                    let price = arrDish[i].querySelector("price");
                    let vendorCode = arrDish[i].querySelector("vendorCode");
                    let pictures = arrDish[i].querySelector("picture");
                    let newObj = {
                        name: name!.innerHTML,
                        pictures: pictures!.innerHTML,
                        price: price!.innerHTML,
                        vendorCode: vendorCode!.innerHTML,
                        setActive: false
                    }
                    newArr.push(newObj);
                    setItemArr(newArr);
                }
                console.log(newArr);
            })
        })
    }

    function nextCards (index: number) {
        setIndexCard(index);
        getOffer(index);
        setIsDisablePrev(false);
        console.log(indexCard);
        if (index === maxIndexCards) {
            setIsDisableNext(true);
        }
    }

    function prevCards (index: number) {
        if (isDisableNext) {
            setIsDisableNext(false);
        }
        if (indexCard > 8) {
            setIndexCard(index - 8);
            getOffer(index - 8);
        } else if (indexCard > 0){
            setIndexCard(index - 8);
            getOffer(index - 8);
            setIsDisablePrev(true);
        } else {
            return
        }
    }

    const listItems = OfferArr.map((item) =>
        <Card price={item.price} name={item.name} vendorCode={item.vendorCode} pictures={item.pictures} isActive={false}></Card>
    );
    return (
        <div>
            <div className={styles.body}>
                {listItems}
            </div>
            <div className={styles.btnBlock}>
                <button disabled={isDisablePrev} onClick={() => prevCards(indexCard)} className={styles.btn}>Назад</button>
                <button disabled={isDisableNext} onClick={() => nextCards(indexCard + 8)} className={styles.btn}>Вперед</button>
            </div>
        </div>
    );
};

export default CategoryPages;