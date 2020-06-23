import React from "react";
import Button from "@material-ui/core/Button";
import HistoryIcon from "@material-ui/icons/History";
const HistoryArea = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button color="default" variant="contained">
          BACK TO MAIN PAGE
        </Button>
        <Button color="primary" variant="contained" startIcon={<HistoryIcon />}>
          HISTORY
        </Button>
      </div>
    </div>
  );
};

export default HistoryArea;
