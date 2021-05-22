import React, { useState, useEffect } from "react";
import ImageOfDay from "../Components/ImageOfDay";

const Home = () => {
  const [data, setData] = useState([]);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const handleClick = () => {
    setShowImage(!showImage);
  };

  return (
    <div>
      <div className="container">
        <h1>Home</h1>
        <p>Click below for the image of the day from NASA!</p>
        <hr />
        <button className="button-primary" onClick={handleClick}>
          {showImage ? "Hide" : "Show"} Image
        </button>
        {showImage && <ImageOfDay images={data} />}
      </div>
    </div>
  );
};

export default Home;
