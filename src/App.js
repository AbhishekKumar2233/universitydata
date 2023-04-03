import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import India from "./components/India";
import Usa from "./components/Usa";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import China from "./components/China";
import Germany from "./components/Germany";

function App() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  const dispatch = useDispatch();
  const selectedCountry = useSelector((state) => state.selectedCountry);

  const selectCountryindia = () => {
    dispatch({ type: "India" });
  };
  const selectCountryusa = () => {
    dispatch({ type: "UnitedStates" });
  };
  const selectCountrychina = () => {
    dispatch({ type: "China" });
  };
  const selectCountrygermany = () => {
    dispatch({ type: "Germany" });
  };

  console.log(selectedCountry,"selectedCountry")
  useEffect(() => {
    setLoader(true)
    axios
      .get(`http://universities.hipolabs.com/search?country=${selectedCountry}`)
      .then((response) => {
        console.log(response.data, "data");
        let data = response.data
        if(data.length > 0){
          setData(response.data);
          setLoader(false)
        }
      })
      .catch((error) => {
        console.error(error);
        setLoader(false)
      });
  }, [selectedCountry]);

  return (
    <>
   {loader == true &&<div class=" w-100 h-100 d-flex align-items-center justify-content-center position-absolute overLayLoader" style={{backgroundColor:"rgba(0,0,0,0.5)"}}>
                <div class="spinner-border text-light" role="status">
                </div>
              </div>}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Dashboard
                selectCountryindia={selectCountryindia}
                selectCountryusa={selectCountryusa}
                selectCountrychina={selectCountrychina}
                selectCountrygermany={selectCountrygermany}
                selectedCountry={selectedCountry}
                data={data}
              />
            }
          />
          <Route
            path="/India"
            exact
            element={
              <PrivateRoute    selectCountryindia={selectCountryindia}
              selectCountryusa={selectCountryusa}
              selectCountrychina={selectCountrychina}
              selectCountrygermany={selectCountrygermany}
              selectedCountry={selectedCountry}>
                <India selectedCountry={selectedCountry} data={data} />
              </PrivateRoute>
            }
          />
          <Route
            path="/Usa"
            exact
            element={
              <PrivateRoute    selectCountryindia={selectCountryindia}
              selectCountryusa={selectCountryusa}
              selectCountrychina={selectCountrychina}
              selectCountrygermany={selectCountrygermany}
              selectedCountry={selectedCountry}>
                <Usa selectedCountry={selectedCountry} data={data} />
              </PrivateRoute>
            }
          />
          <Route
            path="/China"
            exact
            element={
              <PrivateRoute    selectCountryindia={selectCountryindia}
              selectCountryusa={selectCountryusa}
              selectCountrychina={selectCountrychina}
              selectCountrygermany={selectCountrygermany}
              selectedCountry={selectedCountry}>
                <China selectedCountry={selectedCountry} data={data} />
              </PrivateRoute>
            }
          />
          <Route
            path="/Germany"
            exact
            element={
              <PrivateRoute    selectCountryindia={selectCountryindia}
              selectCountryusa={selectCountryusa}
              selectCountrychina={selectCountrychina}
              selectCountrygermany={selectCountrygermany}
              selectedCountry={selectedCountry}>
                <Germany selectedCountry={selectedCountry} data={data} />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
