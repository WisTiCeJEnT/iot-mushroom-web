import React from "react";
import {
  BackGround,
  BackGroundStatus,
  FlexRow,
} from "../components/sharedComponents";
const Status = () => {
  const x = 4;
  const y = 5;
  return (
    <BackGround fresh style={{ justifyContent: "space-around" }}>
      <FlexRow
        style={{ justifyContent: "space-around", border: "solid 2px red" }}
      >
        <BackGroundStatus moderate>Humidity</BackGroundStatus>
        <BackGroundStatus danger>Temperature</BackGroundStatus>
      </FlexRow>
      <FlexRow style={{ justifyContent: "center" }}>
        <button style={{ width: "20%" }}>ปุ่มเปิดปิดน้ำ</button>
      </FlexRow>
      <p style={{ border: "2px solid red" }}>DASHBOARD</p>
    </BackGround>
  );
};

export default Status;
