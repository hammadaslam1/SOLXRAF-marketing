/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/dashboard/DashSidebar";
import DashProfile from "../components/dashboard/DashProfile";
import { DashboardCSS } from "../styles/DashboardCSS";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  const { tabs } = useSelector((state) => state.tab);
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div style={DashboardCSS.main} className="min-h-screen flex flex-row">
      <DashSidebar />
      {tabs === "profile" && <DashProfile />}
      {tabs === "signout" && <h1>signed out</h1>}
    </div>
  );
};

export default Dashboard;
