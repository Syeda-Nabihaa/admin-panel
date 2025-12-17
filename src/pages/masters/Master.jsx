import React, { useState } from "react";
import { motion } from "framer-motion";
import Tabs from "../../components/Tabs";
import Degree from "./degree/Degree";
import BanWords from "./banwords/BanWords";

export default function Master() {
  const [activeTab, setActiveTab] = useState("degree");

  const tabs = [
    { id: "degree", label: "Degree" },
    { id: "ban-words", label: "Ban Words" },
  ];
  return (
    <div>
      <div className="mb-6">
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          onChange={(id) => setActiveTab(id)}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        {activeTab === "degree" && <Degree />}
        {activeTab === "ban-words" && <BanWords />}
      </motion.div>
    </div>
  );
}
