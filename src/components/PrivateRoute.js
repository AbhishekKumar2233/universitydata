import React from "react";
import Navbar from "./Navbar";

export default function PrivateRoute({
  children,
  selectCountryindia,
  selectCountryusa,
  selectCountrychina,
  selectCountrygermany,
  selectedCountry,
  loader
}) {
  return (
    <>
     
    
      <Navbar
        selectCountryindia={selectCountryindia}
        selectCountryusa={selectCountryusa}
        selectCountrychina={selectCountrychina}
        selectCountrygermany={selectCountrygermany}
        selectedCountry={selectedCountry}
      />
      {children}
    </>
  );
}
