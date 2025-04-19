"use client";

import Banner from "@/components/banner";
import { MasterScreenWrapper } from "./styled";
import MasterContent from "@/components/master";

const MasterScreen = () => {
  return (
    <MasterScreenWrapper>
      <Banner />
      <MasterContent />
    </MasterScreenWrapper>
  );
};

export default MasterScreen;
