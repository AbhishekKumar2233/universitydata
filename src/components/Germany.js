import React from "react";
import Navbar from "./Navbar";
import Table from "./Table";

export default function Germany({ selectedCountry, data }) {
  return (
    <>
    <h2 className="selectedheading">Top universities of {selectedCountry} :</h2>
    <Table data={data} />
    </>
  );
}
