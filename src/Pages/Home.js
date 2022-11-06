import React from "react";
import image from "../image/welcome.svg";

export const Home = () => {
  return (
    <div className="container">
      <h1>Github Portfolio</h1>
      <div>Welcome to my github portfolio</div>
      <p>
        Click on the profile icon to view my profile or the repository icon to
        view my projects
      </p>
      <div className="home-image">
        <img src={image} alt="welcome" />
      </div>
    </div>
  );
};

export default Home;
