import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home page
      <Link to="/profile">about</Link>
    </div>
  );
};

export default Home;
