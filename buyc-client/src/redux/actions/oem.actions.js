import { GETOEMS, ADDOEM, ERROR, LOADING } from "../actionTypes/oem.actionTypes"
import axios from "axios"

export const GetOems = (model) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const params = {}
        if (model) {
            params.model = model
        }
        let res = await axios.get(`${process.env.REACT_APP_BASEURL}/oem`, { params })
        dispatch({ type: GETOEMS, payload: res.data.oems })
    } catch (error) {
        dispatch({ type: ERROR, payload: error.response.data })
    }
}

export const AddOems = (data) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        let res = await axios.post(`${process.env.REACT_APP_BASEURL}/oem/addoem`, data, {
            headers: { Authorization: JSON.parse(localStorage.getItem("auth")).token }
        })
        alert("OEM added Successfully")
        dispatch({ type: ADDOEM, payload: res.data.oem })
    } catch (error) {
        dispatch({ type: ERROR, payload: error.response.data })
    }
}