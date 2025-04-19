"use client";

import Gallery from "@/plugins/tail-girl-component/gallery";
import { BlogScreenWrapper } from "./styled";
import Banner from "@/components/banner";

interface BlogScreenProps {}
const initialState = {
  message: "",
};

const HouseKeeperScreen = ({}: BlogScreenProps) => {
  return (
    <BlogScreenWrapper>
      <Banner />
      <Gallery />
    </BlogScreenWrapper>
  );
};

export default HouseKeeperScreen;
