import React from "react";

export const Card = ({ ciudad }) => {
  if (!ciudad) {
    return null; // No renderiza nada si no hay ciudad seleccionada
  }


  return (
    <div className="card-city">
      <h2>{ciudad.name}</h2>
      <p>{ciudad.description ?? "No hay descripción disponible"}</p>
      <ul>
        <li>Superficie: {ciudad.surface ? `${ciudad.surface} km²` : "No disponible"}</li>
        <li>Población: {ciudad.population ?? "No disponible"}</li>
        <li>Código Postal: {ciudad.postalCode ?? "No disponible"}</li>
      </ul>
    </div>
  );
};
