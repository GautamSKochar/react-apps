import clases from "./Input.module.css";
import React, { useRef, useImperativeHandle } from "react";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });
  return (
    <div
      className={`${clases["new-expense__control"]} ${
        !props.isValid && clases.invalid
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        id={props.id}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        min={props.min}
        max={props.max}
        step={props.step}
      />
    </div>
  );
});

export default Input;
