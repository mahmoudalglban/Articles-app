import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainCom from "../components/MainCom";

const Layout = ({ children }) => {
  return (
    <div lang="ar" >
      <div className="d-flex flex-column">
        <div>
          <Navbar />
        </div>
        <div>
          <MainCom />
          <main>{children}</main>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
