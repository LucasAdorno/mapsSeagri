import React, { useEffect, useState } from "react";

import { Container, Modal, ContentModal, ButtonClose } from "./styles";

function InfoModal({ trator, allMarkers, closeModal, visible }) {
  const [data, setData] = useState();

  useEffect(() => {
    const tempData = allMarkers.filter(({ tombo }) => tombo === trator);
    setData(tempData[0]);
  }, [trator, allMarkers]);

  return (
    <Container visible={visible}>
      <Modal>
        {data ? (
          <>
            <ContentModal>
              <ButtonClose onClick={() => closeModal()}>X</ButtonClose>
              <h1>{data.municipio}</h1>
              {data.tipo} nº {data.tombo}
              <h3>{data.entidade}</h3>
            </ContentModal>
          </>
        ) : (
          <></>
        )}
      </Modal>
    </Container>
  );
}

export default InfoModal;
