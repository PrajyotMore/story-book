import React from "react";
import PropTypes from "prop-types";

import "./header.css";

import logo from "../../src/stories/assets/logo.png";
import profile from "../../public/profile_img.png";

export const Header = ({ user, ...props }) => {
  console.log('header==',user, props)
  const userName = user ? user.name : "";
  const userAgent = user ? user.agent : "";
  return (
    <>
      <div className="header">
        <div className="header_wrapper">
          <div className="taining_header">
            <div style={{ paddingLeft: "8px", fontSize: "16px" }}>
              Resources & E- Academy
            </div>
          </div>

          <div className="logo_section">
            <img className="brand_logo" src={logo} alt="creditx Logo" />
          </div>

          <div className="profile_wrapper">
            <img className="profile_img" src={profile} alt="img" />
            <div className="profile-content d-none d-md-block">
              <div className="content">
                <div className="text-wrapper">{userName}</div>
                <div className="div">{userAgent}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    agent: PropTypes.string.isRequired
  }),
  // onLogin: PropTypes.func.isRequired,
  // onLogout: PropTypes.func.isRequired,
  // onCreateAccount: PropTypes.func.isRequired,
};
