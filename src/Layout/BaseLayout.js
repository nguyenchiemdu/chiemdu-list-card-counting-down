import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function BaseLayout({ children }) {
  return (
    <div className="base">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
export default BaseLayout;
