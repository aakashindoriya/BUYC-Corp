import { ADDCAR, DELETECARS, EDITCAR, GETCARS, ERROR, LOADING } from '../actionTypes/oldcar.actionTypes';

const initialState = {
    cars: [],
    loading: false,
    error: null
};

const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETCARS:
            return {
                ...state,
                cars: action.payload,
                loading: false,
                error: null
            };
        case ADDCAR:
            return {
                ...state,
                cars: [...state.cars, action.payload],
                loading: false,
                error: null
            };
        case DELETECARS:
            return {
                ...state,
                cars: state.cars.filter(car => !action.payload.includes(car._id)),
                loading: false,
                error: null
            };
        case EDITCAR:
            return {
                ...state,
                cars: state.cars.map(car => car._id === action.payload._id ? action.payload : car),
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

export default carReducer;
