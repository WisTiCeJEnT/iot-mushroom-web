import React from "react";
import styled from "styled-components";
const ValueStatusBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border-radius: 10px;
  background: whitesmoke;
  margin: 2rem 0;
`;
const ValueBox = styled.div`
  width: 100%;
  font-size: 1.5em;
  text-align: right;
  padding-left: 3.5rem;
`;
const UnitBox = styled.div`
  width: 100%;
  font-size: 2em;
  text-align: right;
  padding-right: 1rem;
  font-weight: bold;
  @media (max-width: 650px) {
    font-size: 1.5em;
  }
`;
const valueStatus = ({ value, unit }) => {
  return (
    <ValueStatusBox>
      <ValueBox>{value}</ValueBox>
      <UnitBox>Unit</UnitBox>
    </ValueStatusBox>
  );
};

export default valueStatus;
