import React, { useState, useEffect } from "react";
import axios from "axios";

const ImageItem = ({ images }) => {
  //   const imgPup = Object.values(images);
  const [img1, img2, img3] = images;
  //   console.log(img1);
  //   console.log(img2);
  //   console.log(img3);
  return (
    <div>
      <img src={`${img1}`} alt="" />
      <img src={`${img2}`} alt="" />
      <img src={`${img3}`} alt="" />
    </div>
  );
};

export default ImageItem;
