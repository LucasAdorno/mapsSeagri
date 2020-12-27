import React, { useEffect, useState } from "react";

import {
  Container,
  Modal,
  ContentModal,
  ButtonClose,
  ChangeTractor,
  RelatedCities,
} from "./styles";

function InfoModal({ trator, allMarkers, closeModal, visible }) {
  const [data, setData] = useState();
  const [inTheCity, setInTheCity] = useState();
  const [inTheZone, setInTheZone] = useState();

  useEffect(() => {
    const tempData = allMarkers.filter(({ tombo }) => tombo === trator);
    let tempMunicipios;
    let tempTerritorio;

    if (tempData[0]) {
      tempMunicipios = allMarkers.filter(
        ({ municipio }) => tempData[0].municipio === municipio
      );
      tempTerritorio = allMarkers.filter(
        ({ territorio }) => tempData[0].territorio === territorio
      );
    }

    setData(tempData[0]);
    setInTheCity(tempMunicipios);
    setInTheZone(tempTerritorio);
  }, [trator, allMarkers]);

  const handleChangeSelected = (trator) => {
    const tempData = allMarkers.filter(({ tombo }) => tombo === trator);
    let tempMunicipios;
    let tempTerritorio;

    if (tempData[0]) {
      tempMunicipios = allMarkers.filter(
        ({ municipio }) => tempData[0].municipio === municipio
      );
      tempTerritorio = allMarkers.filter(
        ({ territorio }) => tempData[0].territorio === territorio
      );
    }

    setData(tempData[0]);
    setInTheCity(tempMunicipios);
    setInTheZone(tempTerritorio);
  };

  return (
    <Container visible={visible}>
      <Modal>
        {data ? (
          <>
            <ContentModal>
              <ButtonClose onClick={() => closeModal()}>X</ButtonClose>
              <h1>{data.municipio}</h1>
              {data.tipo} nº {Math.round(data.tombo)}
              <h3>{data.entidade}</h3>
            </ContentModal>

            <RelatedCities>
              <h3>Em {data.municipio}:</h3>
              <ChangeTractor>
                {inTheCity.map(({ tombo }) => (
                  <button
                    key={tombo}
                    onClick={() => handleChangeSelected(tombo)}
                  >
                    {Math.round(tombo)}
                  </button>
                ))}
              </ChangeTractor>
            </RelatedCities>
            <RelatedCities>
              <h3>Na região ({data.territorio}):</h3>
              <ChangeTractor>
                {inTheZone.map(({ tombo }) => (
                  <button
                    key={tombo}
                    onClick={() => handleChangeSelected(tombo)}
                  >
                    {Math.round(tombo)}
                  </button>
                ))}
              </ChangeTractor>
            </RelatedCities>
          </>
        ) : (
          <></>
        )}
      </Modal>
    </Container>
  );
}

export default InfoModal;
