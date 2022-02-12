import Card from "./Card";
import Button from "./Button";
import clases from "./ErrorModal.module.css";
import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={clases.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={clases.modal}>
      <header className={clases.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={clases.content}>
        <p>{props.message}</p>
      </div>
      <footer className={clases.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default ErrorModal;
