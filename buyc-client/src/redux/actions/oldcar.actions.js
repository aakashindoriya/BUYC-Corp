import { ADDCAR, DELETECARS, EDITCAR, GETCARS, ERROR, LOADING } from '../actionTypes/oldcar.actionTypes';
import axios from "axios"
export const AddCar = (data) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        let res = await axios.post(`${process.env.REACT_APP_BASEURL}/car/addcar`, data, {
            headers: { Authorization: JSON.parse(localStorage.getItem("auth")).token }
        })
        alert("Car added Successfully")
        dispatch({ type: ADDCAR, payload: res.data.oldCar })
    } catch (error) {
        dispatch({ type: ERROR, payload: error.response.data })
    }
}
export const EditSingleCar = (data) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const { carid, kmsOnOdometer, majorScratches, description, originalPaint, previousBuyers, price, registrationPlace, title, accidentsReported } = data
        let res = await axios.patch(`${process.env.REACT_APP_BASEURL}/car/${carid}`, {
            kmsOnOdometer, majorScratches, description, originalPaint, previousBuyers, price, registrationPlace, title, accidentsReported
        }, {
            headers: { Authorization: JSON.parse(localStorage.getItem("auth")).token }
        })
        alert("updated sucessfully")
        dispatch({ type: EDITCAR, payload: res.data })
    } catch (error) {
        dispatch({ type: ERROR, payload: error.response.data })
    }
}

export const GetAllCars = (queries) => async (dispatch) => {
    try {
        dispatch({ type: LOADING });

        const { q, lte, gte, sort, order, color } = queries;

        let url = `${process.env.REACT_APP_BASEURL}/car`;

        // Build the query parameters
        const params = {};

        if (q) {
            params.q = q;
        }

        if (lte) {
            params.lte = lte;
        }

        if (gte) {
            params.gte = gte;
        }

        if (sort) {
            params.sort = sort;
        }

        if (order) {
            params.order = order;
        }

        if (color) {
            params.color = color;
        }

        const res = await axios.get(url, { params });
        console.log(res)
        return dispatch({ type: GETCARS, payload: res.data.oems })
    } catch (error) {
        console.log(error)
        // dispatch({ type: ERROR, payload: error.response.data })
    }
}


export const DeleteCars = (ids) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const queryParams = ids.join('&id=');

        const url = `${process.env.REACT_APP_BASEURL}/car?id=${queryParams}`;

        await axios.delete(url, {
            headers: { Authorization: JSON.parse(localStorage.getItem("auth")).token }
        });
        alert("Delete Successfully")
        dispatch({ type: DELETECARS, payload: ids })
    } catch (error) {
        console.log(error)
        dispatch({ type: ERROR, payload: error.response.data })
    }
}