"use client";

import Banner from "@/components/banner";
import SideBar from "@/components/sidebar";
import useWindowResize from "@/hooks/use-window-resize";
import ProfileScreen from "@/screens/profile";
import { Container } from "@/styles/common";
import { useEffect } from "react";

export default async function ProfilePage() {
  return (
    <div className="pt-50 hide-desktop">
      <ProfileScreen />
    </div>
  );
}
