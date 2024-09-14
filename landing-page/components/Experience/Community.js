import Spline from "@splinetool/react-spline";
import React, { useEffect, useRef } from "react";

const Community = () => {
  const splineRef = useRef(null);

  const onLoad = (splineApp) => {
    console.log(splineApp);
    
    splineRef.current = splineApp;

    // Set a fixed zoom level to prevent zooming
    splineApp.setZoom(1); // Adjust the zoom value as needed
  };

  return (
    <>
      <Spline
        scene="https://prod.spline.design/o1p7-XCLAYeabnya/scene.splinecode"
        onLoad={onLoad}
      />
    </>
  );
};

export default Community;
