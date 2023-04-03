import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar({
  selectCountryindia,
  selectCountryusa,
  selectCountrychina,
  selectCountrygermany,
  selectedCountry,
}) {
  return (
    <div className="navbardiv">
      <Link
        className={selectedCountry == "India" ? "navbtn active" : "navbtn"}
        onClick={selectCountryindia}
        to="/India"
      >
        India
      </Link>

      <Link
        to="/usa"
        className={
          selectedCountry == "United+States" ? "navbtn active" : "navbtn"
        }
        onClick={selectCountryusa}
      >
        United States
      </Link>

      <Link
        to="/china"
        className={selectedCountry == "China" ? "navbtn active" : "navbtn"}
        onClick={selectCountrychina}
      >
        China
      </Link>

      <Link
        to="/Germany"
        className={selectedCountry == "Germany" ? "navbtn active" : "navbtn"}
        onClick={selectCountrygermany}
      >
        Germany
      </Link>
    </div>
  );
}
