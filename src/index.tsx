import React, { useLayoutEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {BrowserRouter, useLocation} from "react-router-dom";
import Routing from "./Routing";
import Footer from "./components/core/Footer";
import LoginBar from "./components/core/LoginBar";

const Wrapper = ({children}: any) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Wrapper>
        <LoginBar />
        <div className="h-[96px]"></div>
        <Routing />
        <Footer />
      </Wrapper>
    </BrowserRouter>
  </React.StrictMode>
);
