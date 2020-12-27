import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const SelectCity = styled.select`
  position: absolute;
  top: 40px;
  left: 100px;

  width: 200px;
  height: 48px;
  padding: 4px;

  background-color: #f0f0f0;
  outline: none;
  border: 2px solid #334499;
  border-radius: 8px;

  z-index: 1000;
`;

export const InputTombo = styled.input`
  position: absolute;
  top: 40px;
  left: 320px;

  width: 200px;
  height: 48px;
  padding: 4px;

  background-color: #f0f0f0;
  outline: none;
  border: 2px solid #334499;
  border-radius: 8px;

  z-index: 1000;
`;
