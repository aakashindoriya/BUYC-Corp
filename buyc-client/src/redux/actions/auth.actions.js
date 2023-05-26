import axios from "axios"
import { AUTH_LOGIN_FAILURE, AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS } from "../actionTypes/auth.actionTypes"

export const SignUp = (data) => async (dispatch) => {
    try {
        const { role } = data
        dispatch({ type: AUTH_LOGIN_REQUEST })
        if (role === "oem") {
            let res = await axios.post(`${process.env.REACT_APP_BASEURL}/oem/signup`, { ...data }, {
                headers: { Authorization: JSON.parse(localStorage.getItem("auth")).token }
            })
            return dispatch({ type: AUTH_LOGIN_SUCCESS, payload: res.data })
        }
        let res = await axios.post(`${process.env.REACT_APP_BASEURL}/user/signup`, { ...data })
        return dispatch({ type: AUTH_LOGIN_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: AUTH_LOGIN_FAILURE })
    }
}

export const LogIn = (data) => async (dispatch) => {
    try {
        dispatch({ type: AUTH_LOGIN_REQUEST })
        let res = await axios.post(`${process.env.REACT_APP_BASEURL}/user/login`, { ...data })
        return dispatch({ type: AUTH_LOGIN_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: AUTH_LOGIN_FAILURE })
    }
}
