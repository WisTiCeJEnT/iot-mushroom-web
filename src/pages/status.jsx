import React from "react";
import "fontsource-roboto";
import { Button, Typography } from "@material-ui/core";
import {
  BackGround,
  BackGroundStatus,
  FlexRow,
} from "../components/sharedComponents";
const Status = () => {
  return (
    <BackGround fresh>
      <FlexRow
        style={{
          justifyContent: "space-around",
          alignItems: "center",
          border: "solid 2px red",
          height: "40%",
          paddingLeft: "5rem",
        }}
      >
        <Typography>TEST typ</Typography>
        <div>TEST</div>
        <BackGroundStatus moderate>
          Humidity<div>TEST</div>
        </BackGroundStatus>
        <BackGroundStatus danger>Temperature</BackGroundStatus>
      </FlexRow>

      <FlexRow style={{ justifyContent: "center" }}>
        <Button variant="contained" color="primary" style={{ width: "20%" }}>
          ปุ่มเปิดปิดน้ำ
        </Button>
      </FlexRow>
      <p
        style={{
          border: "2px solid red",
          width: "30%",
          position: "absolute",
          right: "0",
        }}
      >
        DASHBOARD
      </p>
    </BackGround>
  );
};

export default Status;
