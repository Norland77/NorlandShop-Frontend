import {BasketActionEnum, BasketActions, BasketState} from "./types";

const initialState:BasketState = {
    itemArr: [],
}

export default function modalReducer(state = initialState, action: BasketActions): BasketState {
    switch (action.type) {
        case BasketActionEnum.ADD_ITEM:
            return {...state, itemArr: [...state.itemArr, action.payload]}
        case BasketActionEnum.REMOVE_ITEM:
            // @ts-ignore
            return {...state, itemArr: state.itemArr.filter(item => item.vendorCode !== action.payload)}
        default:
            return state;
    }
}