import React from "react";

const ImageOfDay = ({ images }) => {
  return (
    <div className="card">
      <p>
        Copyright: <em>{images.copyright}</em>
      </p>
      <p>Date: {images.date}</p>
      <p>Image Title: {images.title}</p>
      <img src={images.hdurl} alt={images.name} />
      <p className="img-explanation">{images.explanation}</p>
    </div>
  );
};

export default ImageOfDay;
