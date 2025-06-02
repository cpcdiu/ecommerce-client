import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/ScrollToTop";

const Root = () => {
  return (
    <div>
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
