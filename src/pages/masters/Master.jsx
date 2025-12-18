import React, { useState } from "react";
import { motion } from "framer-motion";
import Tabs from "../../components/Tabs";
import Degree from "./degree/Degree";
import BanWords from "./banwords/BanWords";
import { Heading, SubText } from "../../components/Typography";

export default function Master() {
  const [activeTab, setActiveTab] = useState("degree");

  const tabs = [
    { id: "degree", label: "Degree", icon: "🎓" },
    { id: "ban-words", label: "Ban Words", icon: "🚫" },
  ];
  
  return (
    <div className="p-6  min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <Heading title="Master Settings"/>
          <SubText text="Configure advanced system settings and restrictions"/>
        </div>

<div className=" p-2 mb-8  overflow-hidden">
  <Tabs
    tabs={tabs}
    activeTab={activeTab}
    onChange={(id) => setActiveTab(id)}
  />
</div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className=" rounded-2xl shadow-xl "
        >
          {activeTab === "degree" && <Degree />}
          {activeTab === "ban-words" && <BanWords />}
        </motion.div>
      </div>
    </div>
  );
}
