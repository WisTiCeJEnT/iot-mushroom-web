import React from "react";
import styled from "styled-components";
import "fontsource-roboto";
import withHeader from "../hoc/withHeader";
import WaterControl from "../components/status/waterControl";
import { BackGroundStatus, FlexRow } from "../components/sharedComponents";
import Divider from "@material-ui/core/Divider";
const FlexRoww = styled.div`
  display: flex;
  flex-direction: row;
`;
const Status = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        background: `radial-gradient(
    ellipse farthest-corner at 100% 0,
    #01ff70 5%,
    #ffffff 95%
  )`,
      }}
    >
      <FlexRow
        style={{
          justifyContent: "space-around",
          height: "40%",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
      >
        <BackGroundStatus moderate>TEMPERATURE</BackGroundStatus>
        <BackGroundStatus danger>HUMIDITY</BackGroundStatus>
      </FlexRow>
      <Divider />
      <WaterControl />
      <Divider />
      <FlexRow
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          height: "20%",
        }}
      >
        {/* <Button
          style={{
            width: "20%",
            height: "50%",
            border: "solid green 2px",
          }}
        >
          DASHBOARD
        </Button> */}
      </FlexRow>
      {/* MAIN CONTENT */}
    </div>
  );
};

export default withHeader(Status);
