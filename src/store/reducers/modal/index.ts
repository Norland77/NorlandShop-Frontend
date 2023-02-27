import {ModalActionEnum, ModalActions, ModalState} from "./types";

const initialState:ModalState = {
    isActive: false,
    count: 0
}

export default function modalReducer(state = initialState, action: ModalActions): ModalState {
    switch (action.type) {
        case ModalActionEnum.SET_MODAL:
            return {...state, isActive: action.payload}
        case ModalActionEnum.SET_COUNT:
            return {...state, count: action.payload}
        default:
            return state;
    }
}