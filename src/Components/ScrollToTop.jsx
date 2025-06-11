import React, { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [location.pathname]);
  return null;
};

export default ScrollToTop;
