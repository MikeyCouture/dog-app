import React from "react";

const Header = () => {
  return (
    <div className="title-Container">
      <img
        className="paw"
        src={`${process.env.PUBLIC_URL}/assets/newpaw.png`}
      />
      <h1>Browse a Doggo!</h1>
      <img
        className="paw"
        src={`${process.env.PUBLIC_URL}/assets/newpaw.png`}
      />
    </div>
  );
};

export default Header;
