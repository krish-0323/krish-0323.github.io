"use client";
import React from "react";
import Header from "./_components/Header";
import logo from "../../public/logoipsum.svg";
import { createContext, useState } from "react";
export const WebCamContext = createContext();

const DashboardLayout = ({ children }) => {
  const [webCamEnabled, setWebCamEnabled] = useState(false);
  return (
    <div className="bg1">
        <Header logo={logo} />
        {/* <Separator className="my-0 text-black bg-black" /> */}
        <div className="">
          <WebCamContext.Provider value={{ webCamEnabled, setWebCamEnabled }}>
            {children}
          </WebCamContext.Provider>
        </div>
    </div>
  );
};

export default DashboardLayout;
