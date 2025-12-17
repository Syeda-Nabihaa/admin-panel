import React, { useEffect, useState } from "react";
import AuthService from "../../../services/AuthService";
import Tabs from "../../../components/Tabs";
import { motion } from "framer-motion";
import PersonalInfo from "./PersonalInfo";
import ChangePassword from "./ChangePassword";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Personal Info" },
    { id: "password", label: "Change Password" },
  ];
  const service = new AuthService();
  async function GetProfile() {
    try {
      const response = await service.getProfile();
      setUser(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("Error", error);
    }
  }

useEffect(() => {
  if (activeTab === "profile") {
    GetProfile();
  }
}, [activeTab]);

  if (!user) {
    return <div>Loading...</div>;
  }
  return (
  <div className="bg-white rounded-xl shadow-sm p-6 w-full">
  <div className="flex items-center space-x-4 mb-8">
    <div className="w-16 h-16 rounded-full bg-linear-to-br from-blue-100 to-blue-200 flex items-center justify-center overflow-hidden">
      {user.userDetails.avatarUrl ? (
        <img
          src={user.userDetails.avatarUrl}
          className="w-full h-full object-cover"
          alt=""
        />
      ) : (
        <div className="text-blue-600 text-2xl font-bold">
          {user.userDetails.first_name?.[0]?.toUpperCase() || "U"}
        </div>
      )}
    </div>
    <div>
      <h2 className="text-xl font-bold text-gray-900">User Profile</h2>
      <p className="text-gray-600 text-sm">Account Information</p>
    </div>
  </div>

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
    {activeTab === "profile" && <PersonalInfo user={user} />}
    {activeTab === "password" && <ChangePassword />}
  </motion.div>
</div>
  );
}
