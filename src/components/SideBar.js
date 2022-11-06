import React, { useState } from "react";
import {
  FaGithub,
  FaHome,
  FaProjectDiagram,
  FaSalesforce
} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import "../css/sidebar.css";
import { NavLink } from "react-router-dom";

export const SideBar = () => {
  const [sideBar, setSideBar] = useState(false);

  const sideBarData = [
    {
      name: "Home",
      icon: <FaHome />,
      path: "./"
    },
    {
      name: "Profile",
      icon: <CgProfile />,
      path: "./profile"
    },
    {
      name: "Repositories",
      icon: <FaProjectDiagram />,
      path: "./repos"
    }
  ];

  const showSideBar = () => setSideBar(!sideBar);

  const CustomNavLink = ({ to, ...props }) => {
    return (
      <NavLink
        className={({ isActive }) =>
          isActive ? "bar-link active-bar" : "bar-link"
        }
        to={to}
        end
        {...props}
      />
    );
  };

  return (
    <div className={`side-bar ${sideBar ? "show-bar" : ""}`}>
      {!sideBar ? (
        <span onClick={() => setSideBar(true)} className="bar-center">
          <FiMenu />{" "}
        </span>
      ) : (
        <span onClick={() => setSideBar(false)} className="bar-center">
          <MdClose />
        </span>
      )}
      <nav>
        <h2>
          <span>
            <FaGithub />
          </span>
          <span className={!sideBar ? "show-span" : ""}>Portfolio</span>
        </h2>
        <nav>
          {sideBarData.map((data, index) => (
            <CustomNavLink to={data.path} key={index}>
              <span>{data.icon}</span>
              <span className={!sideBar ? "show-span" : ""}>{data.name}</span>
            </CustomNavLink>
          ))}
        </nav>
      </nav>
    </div>
  );
};

export default SideBar;
