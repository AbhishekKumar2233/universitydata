import React from "react";
import Navbar from "./Navbar";
import Table from "./Table";

export default function Usa({ selectedCountry, data }) {
  return (
    <>
      {" "}
      <h2 className="selectedheading">Top universities of United States :</h2>
      <Table data={data} />
    </>
  );
}
