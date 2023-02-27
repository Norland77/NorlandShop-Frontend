export interface ModalState {
    isActive: any;
    count: number;
}

export enum ModalActionEnum {
    SET_MODAL = "SET_MODAL",
    SET_COUNT = "SET_COUNT",
}
export interface SetModalAction {
    type: ModalActionEnum.SET_MODAL;
    payload: any
}

export interface SetCountAction {
    type: ModalActionEnum.SET_COUNT;
    payload: number
}

export type ModalActions = SetModalAction | SetCountAction