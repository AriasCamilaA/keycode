import { useState, useEffect } from "react";
import { SelectList } from "./SelectList";
import { Card } from "./CityCard";

export const Selects = () => {
  const [departamento, setDepartamento] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState(null);

  useEffect(() => {
    if (ciudad) {
      fetch(`https://api-colombia.com/api/v1/City/${ciudad}`)
        .then((response) => response.json())
        .then((data) => setCiudadSeleccionada(data))
        .catch((error) => console.error("Error al obtener la ciudad:", error));
    }
  }, [ciudad]);

  return (
    <div className="container">
      <div>
        <SelectList
          title="Departamento"
          url="https://api-colombia.com/api/v1/Department"
          manejadorCambio={(event) => {
            setDepartamento(event.target.value);
          }}
        />
       {departamento && <SelectList
          title="Municipios"
          url={`https://api-colombia.com/api/v1/Department/${departamento}/cities`}
          manejadorCambio={(event) => {
            setCiudad(event.target.value);
          }}/>}
        
      </div>
      <Card ciudad={ciudadSeleccionada} />
    </div>
  );
};
