import React from "react";
import { FiUser, FiMail, FiShield, FiEdit } from "react-icons/fi";
import { InfoCard } from "../../../components/Card";
export default function PersonalInfo({ user }) {
  return (
    <div className="space-y-4">
      {/* Full Name Card */}

      <InfoCard
        icon={<FiUser className="w-4 h-4 text-blue-600" />}
        label="Full Name"
        title={`${user.userDetails.first_name} ${user.userDetails.last_name}`}
      />

      <InfoCard
        icon={<FiMail className="w-4 h-4 text-purple-600" />}
        label="Email Address"
        title={user.email}
      />

      <InfoCard
        icon={<FiShield className="w-4 h-4 text-amber-600" />}
        label="Role"
        title={user.role}
      />

      
    </div>
  );
}
