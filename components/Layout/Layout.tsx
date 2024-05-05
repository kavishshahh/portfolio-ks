// components/Layout.js
import React from "react";
import { useRouter } from "next/router";
import Home from "../Home/Home";

const Layout = () => {
  const router = useRouter();
  const hideMenu = router.pathname === "/allprojects";

  return (
    <>
      <div className="lg:flex lg:justify-between lg:gap-4 ">
        <Home />
        <Home />
      </div>
    </>
  );
};

export default Layout;
