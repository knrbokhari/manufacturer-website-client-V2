import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/2F6HkQb/background-1.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="text-7xl font-bold">NEED NEW</h1>
          <h1 className="mb-5 text-7xl font-bold">TOOLS?</h1>
          <p className="mb-5">
            if you went build your business and Looking for the best lead generation tools on the market? we are here to supply your quality full tools.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
