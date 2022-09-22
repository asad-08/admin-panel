import React from "react";
import Content from "../../components/content/Content";
import Settings from "../../components/settings/Settings";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <Content />
      <Settings />
    </div>
  );
};

export default Home;
