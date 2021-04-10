import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import ImageItem from "./ImageItem";

const SearchBar = ({ breedGroup, breedList, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const newBreedList = Object.values(breedList);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = event => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const renderedResults = newBreedList.map(result => {
    return (
      <div
        className="item"
        key={result}
        onClick={() => onSelectedChange(result)}
      >
        {result}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label htmlFor="" className="label">
          Select a Breed
        </label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui select dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedResults}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
