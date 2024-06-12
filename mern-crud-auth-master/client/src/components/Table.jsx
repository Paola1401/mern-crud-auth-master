import React from "react";
import './Table.css';

export function Table({ data }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Fecha</th>
          <th>Distancia</th>
          <th>Tiempo</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.date}</td>
            <td>{item.distance}</td>
            <td>{item.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}