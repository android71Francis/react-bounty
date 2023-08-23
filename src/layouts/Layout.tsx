import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="p-6 sm:py-10 flex flex-wrap items-center mx-auto max-w-screen-xl">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
