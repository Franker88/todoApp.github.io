import React from "react";
import { createPortal } from "react-dom";
import "../styles/Modal.css";

const Modal = ({ children }) => {
  return createPortal(
    <div className="ModalBG">{children}</div>,
    document.getElementById("modal")
  );
};

export { Modal };
