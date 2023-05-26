import { GETOEMS, ADDOEM, ERROR, LOADING } from "../actionTypes/oem.actionTypes"

const initialState = {
    oems: [],
    loading: false,
    error: null
};

const oemReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETOEMS:
            return {
                ...state,
                oems: action.payload,
                loading: false,
                error: null
            };
        case ADDOEM:
            return {
                ...state,
                oems: [...state.oems, action.payload],
                loading: false,
                error: null
            };
        case ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case LOADING:
            return {
                ...state,
                loading: true,
                error: null
            };
        default:
            return state;
    }
};

export default oemReducer;
