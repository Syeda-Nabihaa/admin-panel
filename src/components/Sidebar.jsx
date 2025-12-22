"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/Sidebar-ui";
import {
  IconAlertTriangle,
  IconArrowLeft,
  IconAt,
  IconBadge,
  IconBan,
  IconBell,
  IconBookmark,
  IconBrandTabler,
  IconBuilding,
  IconBuildingBridge2Filled,
  IconChartBar,
  IconChartPie,
  IconClipboardList,
  IconHistory,
  IconLogout,
  IconMessage,
  IconMessageCircle,
  IconMessages,
  IconNotes,
  IconPhoto,
  IconReport,
  IconReportSearch,
  IconSchool,
  IconSearch,
  IconSettings,
  IconShieldCheck,
  IconTag,
  IconTags,
  IconThumbUp,
  IconThumbUpFilled,
  IconTimeline,
  IconTrendingUp,
  IconUserBolt,
  IconUserCancel,
  IconUserOff,
  IconUsers,
  IconUsersGroup,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "../lib/Utils";
import { Link, Outlet } from "react-router-dom";

export function SidebarDemo() {
  const links = [
    {
      label: "Dashboard",
      to: "/",
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "User",
      to: "/user",
      icon: (
        <IconUsers className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "University Campuses",
      to: "/university",
      icon: (
        <IconBuilding className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Master",
      to: "/master",
      icon: (
        <IconBuilding className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Reports",
      to: "/reports",
      icon: (
        <IconBuilding className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Communities",
      to: "/community",
      icon: (
        <IconUsersGroup className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Students",
      to: "/student",
      icon: (
        <IconSchool className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "User Badge",
      to: "/userbadge",
      icon: (
        <IconBadge className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "User Engagement",
      to: "/userengagement",
      icon: (
        <IconChartBar className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Posts",
      to: "/posts",
      icon: (
        <IconNotes className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Comments",
      to: "/comments",
      icon: (
        <IconMessageCircle className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Conversations",
      to: "/conversation",
      icon: (
        <IconMessages className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Messages",
      to: "/messages",
      icon: (
        <IconMessage className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Banned Comments",
      to: "/bannedcomments",
      icon: (
        <IconBan className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Reported Posts",
      to: "/reportedposts",
      icon: (
        <IconReportSearch className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Reported Comments",
      to: "/reportedcomments",
      icon: (
        <IconReport className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Block User",
      to: "/blockuser",
      icon: (
        <IconUserCancel className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "User Warning",
      to: "/warning",
      icon: (
        <IconAlertTriangle className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Banned User",
      to: "/bannedUser",
      icon: (
        <IconUserOff className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Moderation Logs",
      to: "/moderation",
      icon: (
        <IconClipboardList className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Notifications",
      to: "/notifications",
      icon: (
        <IconBell className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Post Votes",
      to: "/postvotes",
      icon: (
        <IconThumbUp className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Comment Votes",
      to: "/commentvotes",
      icon: (
        <IconThumbUpFilled className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Media",
      to: "/media",
      icon: (
        <IconPhoto className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Tags",
      to: "/tags",
      icon: (
        <IconTag className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Post Tags",
      to: "/posttags",
      icon: (
        <IconTags className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Activity Logs",
      to: "/activitylogs",
      icon: (
        <IconTimeline className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Community Settings",
      to: "/communitysettings",
      icon: (
        <IconSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "User Verification",
      to: "/userverification",
      icon: (
        <IconShieldCheck className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Saved Posts",
      to: "/savepost",
      icon: (
        <IconBookmark className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Post Stats",
      to: "/poststats",
      icon: (
        <IconChartPie className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Mentions",
      to: "/mentions",
      icon: (
        <IconAt className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Trending Post",
      to: "/trendingpost",
      icon: (
        <IconTrendingUp className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Search Index",
      to: "/searchindex",
      icon: (
        <IconSearch className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Search History",
      to: "/searchhistory",
      icon: (
        <IconHistory className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Logout",
      to: "#",
      icon: (
        <IconLogout className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "flex w-full h-screen min-h-screen overflow-hidden bg-gray-100 md:flex-row dark:bg-neutral-800"
      )}
    >
      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div
            className={`
    flex flex-1 flex-col overflow-x-hidden overflow-y-auto
    ${open ? "sidebar-scroll" : "hide-scrollbar"}
  `}
          >
            {open ? <Logo /> : <LogoIcon />}

            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>

          {/* User profile bottom */}
          <SidebarLink
            link={{
              label: "Manu Arora",
              to: "/profile",
              icon: (
                <img
                  src="https://assets.aceternity.com/manu.png"
                  className="h-7 w-7 rounded-full shrink-0"
                  alt="Avatar"
                />
              ),
            }}
          />
        </SidebarBody>
      </Sidebar>

      {/* Content Area */}
      <div
        className="flex-1 overflow-y-auto p-5
 bg-dark"
      >
        <Outlet />
      </div>
    </div>
  );
}

export const Logo = () => (
  <Link to="#" className="flex items-center space-x-2 py-1 text-sm text-black">
    <div className="h-5 w-6 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-medium whitespace-pre text-black dark:text-white"
    >
      ADMIN PANEL
    </motion.span>
  </Link>
);

export const LogoIcon = () => (
  <Link to="#" className="flex items-center space-x-2 py-1 text-sm text-black">
    <div className="h-5 w-6 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-white text-center font-bold">
      AP
    </div>
  </Link>
);
