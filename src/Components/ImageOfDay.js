import React from "react";

const ImageOfDay = ({ images }) => {
  console.log(images);
  return (
    <div className="card">
      <p>Copyright: {images.copyright}</p>
      <p>Date {images.date}</p>
      <p>Title {images.title}</p>
      <img src={images.hdurl} alt={images.name} />
      <p>{images.explanation}</p>
    </div>
  );
};

export default ImageOfDay;
