import React, { useEffect, useState } from "react";
import AuthService from "../../services/AuthService";

export default function Profile() {
  const [user, setUser] = useState(null);
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

  useEffect(()=>{
    GetProfile()
  },[])
  if (!user) {
  return <div>Loading...</div>;
}
  return (
  <div className="bg-white rounded-xl shadow-sm p-6 w-full">
  <div className="flex items-center space-x-4 mb-6">
    <div className="w-16 h-16  rounded-full flex items-center justify-center text-white text-2xl font-bold">
        <img src={user.userDetails.avatarUrl} className="rounded-full w-16 h-16" alt="" srcset="" />
      {user.userDetails.first_name?.[0] || "U"}
    </div>
    <div>
      <h2 className="text-xl font-bold text-gray-900">User Profile</h2>
      <p className="text-gray-600 text-sm">Account Information</p>
    </div>
  </div>
  
  <div className="space-y-4">
    <div className="p-4 bg-gray-50 rounded-lg">
      <p className="text-sm text-gray-500 mb-1">Full Name</p>
      <p className="font-medium text-gray-900">
        {user.userDetails.first_name} {user.userDetails.last_name}
      </p>
    </div>
    
    <div className="p-4 bg-gray-50 rounded-lg">
      <p className="text-sm text-gray-500 mb-1">Email Address</p>
      <p className="font-medium text-gray-900">{user.email}</p>
    </div>

     <div className="p-4 bg-gray-50 rounded-lg">
      <p className="text-sm text-gray-500 mb-1">Role </p>
      <p className="font-medium text-gray-900">{user.role}</p>
    </div>
  </div>
</div>
  );
}
