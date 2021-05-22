import React from "react";

const ImageOfDay = ({ images }) => {
  console.log(images);
  return (
    <div className="card">
      <p>Copyright: {images.copyright}</p>
      <p>Date: {images.date}</p>
      <p>
        <span className="underline">Title</span> <br /> {images.title}
      </p>
      <img src={images.hdurl} alt={images.name} />
      <p className="img-explanation">{images.explanation}</p>
    </div>
  );
};

export default ImageOfDay;
