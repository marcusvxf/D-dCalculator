import styled from "styled-components";

export const Card = styled.div`
  background-color: lightblue;
  width: 500px;
  height: 400px;
  margin-top: 10rem;

  backdrop-filter: blur(10px) saturate(50%);
`;

export const Stats = styled.div`
  color: black;
`;
export const Back = styled.div`
  z-index: 100;
  background-color: transparent;
  position: fixed;
  backdrop-filter: blur(5px) saturate(50%);
  width: 100%;
  height: 100%;
  top: 0;
`;
