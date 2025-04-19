import React, { useState, useEffect } from "react";

const Loader = () => {
  // State to manage loader visibility
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state, switch to false after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 3 seconds
    }, 3000); // You can adjust the delay based on your needs

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);

  return (
    <div>
      {isLoading && (
        <div style={{ display: "flex" }} className="loader__wrapper">
          <div data-w-id="bf4aa045-6138-c9e1-bca5-d2709e076f9a" className="_w-loader-bar" style={{ opacity: 0 }}>
            <div style={{ width: "100%", height: "2px" }} className="bar-loader"></div>
          </div>
          <div
            data-w-id="039e3f74-912e-f9ce-bcd6-10e466d2430f"
            className="mask-load"
            style={{
              transform:
                "translate3d(0px, -50vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
          ></div>
          <div
            data-w-id="dbac27fd-0c76-785b-c672-cae1b0870828"
            className="mask-load"
            style={{
              transform:
                "translate3d(0px, 50vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Loader;
