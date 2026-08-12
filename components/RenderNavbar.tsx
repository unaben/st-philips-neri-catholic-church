"use client";

import { usePathname } from "next/navigation";
import Navbar from "./layout/Navbar/Navbar";

const RenderNavbar = () => {
  const pathname = usePathname();

  return <>{!pathname.includes("admin") ? <Navbar /> : null}</>;
};

export default RenderNavbar;
