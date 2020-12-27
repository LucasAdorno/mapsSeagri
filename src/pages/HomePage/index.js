import React, { useEffect, useState } from "react";
import Map from "../../components/Map";
import api from "../../services/api";

import { Container, SelectCity, InputTombo } from "./styles";

function HomePage() {
  const [markers, setMarkers] = useState([]);
  const [allMarkers, setAllMarkers] = useState([]);
  const [allCities, setAllCities] = useState([]);

  useEffect(() => {
    api.get("/results").then((response) => {
      const { data } = response;
      setMarkers(data);
      setAllMarkers(data);
      let tempAllCities = [];

      data.map(({ municipio }) => tempAllCities.push(municipio));

      tempAllCities = tempAllCities.filter(
        (item, index, self) => self.indexOf(item) === index
      );

      setAllCities(tempAllCities);
    });
  }, []);

  const handleFilterCity = (e) => {
    if (e.target.value === "todos") {
      setMarkers(allMarkers);
    } else {
      const tempMarkers = allMarkers.filter(
        ({ municipio }) => municipio === e.target.value
      );
      setMarkers(tempMarkers);
    }
  };

  const handleFilterTombo = (e) => {
    const length = e.target.value.length;
    const tempMarkers = allMarkers.filter(
      ({ tombo }) => tombo.substring(0, length) === e.target.value
    );

    setMarkers(tempMarkers);
  };
  return (
    <Container>
      <SelectCity onChange={handleFilterCity}>
        <option value="todos">Todos os municipios</option>
        {allCities.map((municipio) => (
          <option key={municipio} value={municipio}>
            {municipio}
          </option>
        ))}
      </SelectCity>
      <InputTombo onChange={handleFilterTombo} placeholder="Tombo Nº" />
      <Map markers={markers} />
    </Container>
  );
}

export default HomePage;
