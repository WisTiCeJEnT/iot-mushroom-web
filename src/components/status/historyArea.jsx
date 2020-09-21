import React from "react";
import Button from "@material-ui/core/Button";
import HistoryIcon from "@material-ui/icons/History";
const HistoryArea = (props) => {
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
          justifyContent: "center",
        }}
      >
        <Button
          color="primary"
          variant="contained"
          startIcon={<HistoryIcon />}
          onClick={() => {
            window.location = "./history";
          }}
        >
          HISTORY
        </Button>
      </div>
    </div>
  );
};

export default HistoryArea;
