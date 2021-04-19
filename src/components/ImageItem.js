import React from "react";
// import axios from "axios";

const ImageItem = ({ images }) => {
  const [img1, img2, img3] = images;

  return (
    <div className="img-container">
      <div className="img-box ">
        <img src={`${img1}`} alt="" />
      </div>
      <div className="img-box ">
        <img src={`${img2}`} alt="" />
      </div>
      <div className="img-box ">
        <img src={`${img3}`} alt="" />
      </div>
    </div>
  );
};

export default ImageItem;
