import "./modal.scss";
import { Box, Modal as MuiModal } from "@mui/material";
import React, { SetStateAction } from "react";

interface IProps {
  isOpen: boolean;
  onClose: React.Dispatch<SetStateAction<boolean>> | (() => void);
  children: JSX.Element;
}

const Modal: React.FC<IProps> = ({ isOpen, onClose, children }) => {
  return (
    <MuiModal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box id={"modal"}>{children}</Box>
    </MuiModal>
  );
};
export default Modal;
