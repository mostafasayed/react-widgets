import React, { useState, useEffect, useRef } from "react";

const DropDown = ({ label, options, selected, onSelectedChange }) => {
  const [labelColor, setLabelColor] = useState("black");
  const [open, setOpen] = useState(false);
  const dropDownRef = useRef();
  useEffect(() => {
    const onBodyClicked = (e) => {
      if (dropDownRef.current.contains(e.target)) return;
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClicked);

    return () => {
      document.body.removeEventListener("click", onBodyClicked);
    };
  }, []);

  const onClickHandler = (option) => {
    setLabelColor(option.value);
    onSelectedChange(option);
  } 
  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) return null;
    return (
      <div
        key={option.value}
        onClick={(e) => {
          onClickHandler(option);
        }}
        className="item"
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={dropDownRef} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={(e) => {
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
      <div className="label" style={{color: labelColor}}>Chosen Color</div>
    </div>
  );
};

export default DropDown;
