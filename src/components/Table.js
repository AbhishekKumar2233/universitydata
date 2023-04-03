import React from "react";
import "../styles/table.css"

export default function Table({ data }) {
//   console.log(data, "data");
  return (
    <>
      <table className="table">
        <thead className="t-head">
          <tr className="head-tr">
            <th>S.N.</th>
            <th>Name</th>
            {/* <th>State</th> */}
            <th>Domains</th>
            <th>Country Code</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody className="t-body">
          {data?.map((items, key) => (
            <tr className="body-tr">
              <td>{key + 1}{"."}</td>
              <td>{items?.name} </td>
              {/* <th>{items?.state-province}</th> */}
              <td><a href={items?.web_pages[0]} alt={items?.name}>{items?.domains[0]}</a></td>
              <td >{items?.alpha_two_code}</td>
              <td>{items?.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
