/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/dashboard/DashSidebar";
import DashProfile from "../components/dashboard/DashProfile";
import { DashboardCSS } from "../styles/DashboardCSS";

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div style={DashboardCSS.main}>
      <DashSidebar />
      {tab === "profile" && <DashProfile />}
    </div>
  );
};

export default Dashboard;
