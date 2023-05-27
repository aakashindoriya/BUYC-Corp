import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react';
import { LogIn, SignUp } from './redux/actions/auth.actions';
import { AddOems, GetOems } from './redux/actions/oem.actions';
import { DeleteCars, EditCar, GetAllCars } from './redux/actions/oldcar.actions';
import Login from './routes/Login';
import Allrouts from './routes/AllRoutes';

import Nav from './components/Nav';
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetOems())
  }, [])
  return (
    <div className="App">
      <Nav />
      <Allrouts />

    </div>
  );
}

export default App;
