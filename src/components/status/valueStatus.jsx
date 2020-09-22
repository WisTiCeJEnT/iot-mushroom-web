import React from "react";
import styled from "styled-components";
const ValueStatusBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border-radius: 10px;
  background: whitesmoke;
  position: relative;
  margin: 2rem 0;
  overflow: hidden;
`;
const ValueBox = styled.div`
  font-size: 1.5em;

  margin: 0rem 0.5rem;
`;
const UnitBox = styled.div`
  font-size: 2em;
  margin-right: 2rem;
  text-align: right;
  font-weight: bold;
  @media (max-width: 650px) {
    font-size: 1.5em;
  }
`;
const valueStatus = ({ value, unit }) => {
  return (
    <ValueStatusBox>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          position: "absolute",
        }}
      >
        <ValueBox>{value}</ValueBox>
      </div>
      <UnitBox>Unit</UnitBox>
    </ValueStatusBox>
  );
};

export default valueStatus;
