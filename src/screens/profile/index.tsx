import Banner from "@/components/banner";
import SideBar from "@/components/sidebar";
import useWindowResize from "@/hooks/use-window-resize";
import { Container } from "@/styles/common";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

interface ProfileScreenProps {}

const ProfileScreen = ({}: ProfileScreenProps) => {
  const router = useRouter();
  const size: any = useWindowResize();

  useEffect(() => {
    if (size.width >= 786) {
      router.push("/");
    }
  }, [size]);

  return (
    <div>
      <Banner />
      <Container className="mt-40">
        <SideBar />
      </Container>
    </div>
  );
};

export default ProfileScreen;
