import {
    AUTH_LOGIN_FAILURE,
    AUTH_LOGIN_REQUEST,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGOUT,
} from "../actionTypes/auth.actionTypes";

const initialState = {
    isAuth: false,
    isLoading: false,
    username: "",
    id: "",
    email: "",
    token: "",
    role: "",
    isError: false
};
let savedstate = JSON.parse(localStorage.getItem("auth")) || initialState

export default function authReducer(state = savedstate, { type, payload }) {
    switch (type) {
        case AUTH_LOGIN_REQUEST:
            return { ...state, isLoading: true, isError: false };
        case AUTH_LOGIN_SUCCESS:
            let obj1 = {
                ...state,
                isAuth: true,
                isError: false,
                isLoading: false,
                username: payload.username,
                id: payload._id,
                email: payload.email,
                token: payload.token,
                role: payload.role
            }
            localStorage.setItem("auth", JSON.stringify(obj1))
            return obj1;
        case AUTH_LOGIN_FAILURE:
            return {
                ...state,
                isAuth: false,
                isLoading: false,
                isError: true
            };
        case AUTH_LOGOUT:
            localStorage.removeItem("auth")
            return initialState;
        default:
            return state;
    }
}