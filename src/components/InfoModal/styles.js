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
  align-items: center;
  justify-content: center;

  background-color: #0003;
  z-index: 1001;

  transition: all 0.8s;
`;

export const Modal = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;

  display: flex;
  flex-direction: column;

  background: #e0e0e0;
  border-radius: 4px;
`;

export const ContentModal = styled.div`
  width: 100%;
  height: 100vh;

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
