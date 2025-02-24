import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(-1);
  };

  return (
    <div>
      <img
        className="h-0 md:h-20  cursor-pointer"
        src="/logos.png"
        alt="Logo"
        onClick={handleLogoClick}
      />
    </div>
  );
};

export default Logo;
