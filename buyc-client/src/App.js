import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react';
import { LogIn, SignUp } from './redux/actions/auth.actions';
import { AddOems, GetOems } from './redux/actions/oem.actions';
import { AddCar, DeleteCars, EditCar, GetAllCars } from './redux/actions/oldcar.actions';
import Login from './routes/Login';
import Allrouts from './routes/AllRoutes';
function App() {

  return (
    <div className="App">
      <Allrouts />
    </div>
  );
}

export default App;
