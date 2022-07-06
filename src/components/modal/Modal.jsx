import React, { useState, useEffect } from "react";
import CloseIcon from "../../assets/icons/close.png";
import "./Modal.css";

const Modal = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    if (props.onClose) {
      props.onClose();
    }
  };

  useEffect(() => {
    setIsOpen(props.isOpen);
  }, [props.isOpen]);

  return (
    <div className={`${isOpen ? "modal-wrapper" : "modal-hidden"}`}>
      <div className="modal-content">
        <div className="card-xl">
          <div onClick={closeModal} className="close-button">
            <img src={CloseIcon} alt="close" />
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
