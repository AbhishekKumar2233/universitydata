import React from "react";
import Navbar from "./Navbar";
import Table from "./Table";

export default function Dashboard({
  selectCountryindia,
  selectCountryusa,
  selectCountrychina,
  selectCountrygermany,
  selectedCountry,
  data,
}) {
  return (
    <>
      <Navbar
        selectCountryindia={selectCountryindia}
        selectCountryusa={selectCountryusa}
        selectCountrychina={selectCountrychina}
        selectCountrygermany={selectCountrygermany}
      />
      <h2 className="selectedheading">
        Top universities of India :
      </h2>
      <Table data={data} />
    </>
  );
}
