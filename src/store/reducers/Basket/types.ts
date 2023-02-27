interface ArrTypes {
    img: string,
    name: string,
    price: string,
    vendorCode: string,
    count: string
}
export interface BasketState {
    itemArr: ArrTypes[],
}

export enum BasketActionEnum {
    ADD_ITEM = "ADD_ITEM",
    REMOVE_ITEM = "REMOVE_ITEM",
}
export interface AddItemAction {
    type: BasketActionEnum.ADD_ITEM;
    payload: any
}

export interface RemoveItemAction {
    type: BasketActionEnum.REMOVE_ITEM;
    payload: {
        vendorCode: string;
    };
}


export type BasketActions = AddItemAction | RemoveItemAction