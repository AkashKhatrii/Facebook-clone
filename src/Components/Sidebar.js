import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png"
        title="Akash Khatri"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="Covid-19 Information Center"
      />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Marketplace" />
    </div>
  );
}

export default Sidebar;
