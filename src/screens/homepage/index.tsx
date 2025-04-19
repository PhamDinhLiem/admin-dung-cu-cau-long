import React from "react";
import { HomepageWrapper } from "./styled";
import Testimonial from "@/plugins/tail-girl-component/testimonial";

interface HomepageProps {}

const Homepage = ({}: HomepageProps) => {
  return (
    <HomepageWrapper>
      <Testimonial />
    </HomepageWrapper>
  );
};

export default Homepage;
