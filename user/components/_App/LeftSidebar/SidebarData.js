import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GridViewIcon from "@mui/icons-material/GridView";
import LayersIcon from "@mui/icons-material/Layers";
import SettingsIcon from "@mui/icons-material/Settings";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CopyAllIcon from "@mui/icons-material/CopyAll";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import RequestPageIcon from "@mui/icons-material/RequestPage";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <GridViewIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,
  },
  {
    title: "Patent Services",
    path: "/apps/file-manager/",
    icon: <LayersIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,
  },
  {
    title: "My Patent",
    path: "/email/inbox/",
    icon: <MailOutlineIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,
  },
  {
    title: "My Patent NFTs",
    path: "/projects/clients/",
    icon: <RequestPageIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,
  },
  {
    title: "About Us",
    path: "/projects/",
    icon: <CopyAllIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,
  },
  {
    title: "Settings",
    path: "/settings/",
    icon: <SettingsIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,
  },
  {
    title: "Help & Support",
    path: "/ecommerce/products/",
    icon: <ShoppingCartCheckoutIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,
  },
];
