import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react';
import { LogIn, SignUp } from './redux/actions/auth.actions';
import { AddOems, GetOems } from './redux/actions/oem.actions';
import { AddCar, DeleteCars, EditCar, GetAllCars } from './redux/actions/oldcar.actions';
function App() {
  const auth = useSelector(s => s.car)
  const dispatch = useDispatch()
  const carid = "64706553e7d87168787385e4"
  useEffect(() => {
    dispatch(DeleteCars(["64706553e7d87168787385e4", "647065f5e7d87168787385e6"]))
    // dispatch(GetAllCars({}))
  }, [])
  console.log(auth)
  return (
    <div className="App">

    </div>
  );
}

export default App;
