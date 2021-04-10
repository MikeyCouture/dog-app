import React from "react";
// import axios from "axios";

const ImageItem = ({ images }) => {
  const [img1, img2, img3] = images;

  return (
    <div className="img-container">
      <img src={`${img1}`} alt="" />
      <img src={`${img2}`} alt="" />
      <img src={`${img3}`} alt="" />
    </div>
  );
};

export default ImageItem;
