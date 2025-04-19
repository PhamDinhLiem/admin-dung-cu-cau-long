"use client";

import React from "react";
import { VideoWrapper } from "./styled";

interface VideoProps {}

const VideoCustom = ({}: VideoProps) => {
  return (
    <VideoWrapper>
      <video className="h-full w-full rounded-lg" controls>
        <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </VideoWrapper>
  );
};

export default VideoCustom;
