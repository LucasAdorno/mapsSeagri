import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  width: ${(props) => (props.visible ? "100vw" : 0)};
  max-width: ${(props) => (props.visible ? "100vw" : 0)};
  height: 100vh;
  overflow: hidden;

  @media (min-width: 720px) {
    width: ${(props) => (props.visible ? "50vw" : 0)};
    max-width: ${(props) => (props.visible ? "100vw" : 0)};
  }

  display: flex;

  background: #e0e0e0;
  z-index: 1001;

  transition: all 0.8s;
`;

export const Modal = styled.div`
  width: 100%;
  padding: 20px;

  display: flex;
  flex-direction: column;

  border-radius: 4px;
`;

export const ContentModal = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  color: #111111bb;
`;

export const ButtonClose = styled.button`
  align-self: flex-end;

  background: none;
  border: none;
  outline: none;

  font-size: 32px;

  color: #333;

  cursor: pointer;
`;

export const RelatedCities = styled.div`
  width: 100%;
  margin-top: 32px;

  display: flex;
  flex-direction: column;
  gap: 12px;

  color: #333;
`;

export const ChangeTractor = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  button {
    background: none;
    outline: none;
    border: none;

    font-size: 16px;

    cursor: pointer;
  }
`;
