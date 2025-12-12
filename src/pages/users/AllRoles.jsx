import React, { useState } from "react";
import Tabs from "../../components/Tabs";
import { motion } from "framer-motion";
import User from "./User";
import UniversityTable from "../University/UniversityTable";

export default function AllRoles() {
  const [activeTab, setActiveTab] = useState("admin");

  const tabs = [
    { id: "admin", label: "Admin" },
    { id: "user", label: "User" },
  ];

  return (
    <div>
      <h1>All roles</h1>

      <Tabs 
        tabs={tabs} 
        activeTab={activeTab} 
        onChange={(id) => setActiveTab(id)} 
      />

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {activeTab === "admin" && <User />}
        {activeTab === "user" && <UniversityTable />}
      </motion.div>
    </div>
  );
}
