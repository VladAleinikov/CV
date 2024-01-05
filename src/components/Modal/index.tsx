import React from "react";

interface IProps {
  setShowModal: React.Dispatch<React.SetStateAction<number>>;
  children: React.ReactNode;
}
const Modal = ({children, setShowModal}: IProps) => {

  return (
    <div className="modal-bg" onClick={(e) => {  setShowModal(-1)}}>
      <div className="modal" onClick={(e) =>e.stopPropagation()}>
        <button className="modal__close" onClick={() => setShowModal(-1)}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
