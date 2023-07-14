import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";

// Import font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faCloudArrowDown,
  faPlus,
  faFolderOpen,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import "../../styles/navigation.css";

const MenuSidebar = ({ children }) => {
  // Sidebard collapse state
  const [collapsed, setCollapsed] = useState(true);

  // Get current location
  let location = useLocation();

  // Define a helper function for creating a MenuItem
  const createMenuItem = (icon, path, label) => {
    const isCurrentPath = location.pathname === path;
    const classes = isCurrentPath ? "active" : "fontawesome-custom";

    return (
      <MenuItem
        icon={<FontAwesomeIcon className={classes} icon={icon} />}
        component={<Link to={path} />}
      >
        <span> {label} </span>
      </MenuItem>
    );
  };

  return (
    <div className="custom-container">
      <div>
        <Sidebar collapsed={collapsed} className="custom-sidebar">
          <Menu iconShape="square">
            <MenuItem
              icon={<FontAwesomeIcon icon={faBars} />}
              className="custom-sidebar-content"
              onClick={() => {
                setCollapsed(!collapsed);
              }}
            >
              <h2 className="custom-sidebar-header"> DataCeva </h2>
            </MenuItem>
            <hr />
            {createMenuItem(faGauge, "/", "Dashboard")}
            <SubMenu
              label="Exports"
              icon={<FontAwesomeIcon icon={faCloudArrowDown} />}
            >
              {createMenuItem(faPlus, "/export/new", "New")}
              {createMenuItem(faFolderOpen, "/export/old", "Previous")}
            </SubMenu>
          </Menu>
        </Sidebar>
      </div>
      <div className="custom-content">{children}</div>
    </div>
  );
};

export default MenuSidebar;
