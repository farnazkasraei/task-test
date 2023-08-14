import React from "react";
import { useNavigate } from "react-router-dom";

const TopNav = () => {
  const navigate = useNavigate();
  return (
    <div className="top-navigation">
      <button onClick={() => navigate(`/`)}>کاربران </button>
      <button onClick={() => navigate(`userChart`)}>چارت </button>
    </div>
  );
};

export default TopNav;
