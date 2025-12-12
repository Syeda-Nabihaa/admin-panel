import React from 'react'
import { FiUser, FiMail, FiShield, FiEdit } from 'react-icons/fi';
export default function PersonalInfo({user}) {
  return (
<div className="space-y-4">
  {/* Full Name Card */}
  <div className="group p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-200 transition-all duration-200 hover:shadow-sm">
    <div className="flex items-start justify-between">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-blue-50 rounded-lg">
          <FiUser className="w-4 h-4 text-blue-600" />
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1 flex items-center gap-1">
            Full Name
          </p>
          <p className="font-medium text-gray-900">
            {user.userDetails.first_name} {user.userDetails.last_name}
          </p>
        </div>
      </div>
      <button className="p-1 text-gray-400 hover:text-blue-600 rounded transition-colors opacity-0 group-hover:opacity-100">
        <FiEdit className="w-4 h-4" />
      </button>
    </div>
  </div>

  {/* Email Address Card */}
  <div className="group p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-200 transition-all duration-200 hover:shadow-sm">
    <div className="flex items-start justify-between">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-purple-50 rounded-lg">
          <FiMail className="w-4 h-4 text-purple-600" />
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Email Address</p>
          <p className="font-medium text-gray-900">{user.email}</p>
        </div>
      </div>
      <button className="p-1 text-gray-400 hover:text-purple-600 rounded transition-colors opacity-0 group-hover:opacity-100">
        <FiEdit className="w-4 h-4" />
      </button>
    </div>
  </div>

  {/* Role Card */}
  <div className="group p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-200 transition-all duration-200 hover:shadow-sm">
    <div className="flex items-start justify-between">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-amber-50 rounded-lg">
          <FiShield className="w-4 h-4 text-amber-600" />
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Role</p>
          <p className="font-medium text-gray-900">{user.role}</p>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
