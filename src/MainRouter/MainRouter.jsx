import React from "react";
import { Route, Routes } from "react-router-dom";
import InfluencerProfile from "../Manage/Profile/InfluencerProfile";


const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Dashboard
            </div>
          }
        />

<Route
          path="/Dashboard"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Dashboard
            </div>
          }
        />
    

        <Route
          path="/Earnings"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Earnings
            </div>
          }
        />
        <Route
          path="/Analytics"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Analytics
            </div>
          }
        />


        <Route
          path="/Profile"
          element={
            <InfluencerProfile />
          }
        />


<Route
          path="/Contracts"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Contracts
            </div>
          }
        />

<Route
          path="/Opportunities"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Opportunities
            </div>
          }
        />




        <Route
          path="/settings"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Settings
            </div>
          }
        />
        <Route
          path="/Support"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
             Help & Support
            </div>
          }
        />

           </Routes>
    </>
  );
};

export default MainRouter;
