import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
const DialogComponent = ({ open, onClose, onWater }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">ตอนนี้เห็ดจะตายแล้ว</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          รดน้ำบ้างเห้ย !
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          กลับ
        </Button>
        <Button onClick={onWater} color="primary" autoFocus>
          รดน้ำ
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogComponent;
