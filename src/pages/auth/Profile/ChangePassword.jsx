import React from "react";
import { Button } from "../../../components/Button";
import { 
  FaLock, 
  FaEye, 
  FaEyeSlash, 
  FaKey, 
  FaShieldAlt, 
  FaCheckCircle,
  FaInfoCircle,
  FaExclamationTriangle
} from "react-icons/fa";
import { Input } from "../../../components/InputFields";
export default function ChangePassword() {
  return (
    <div className="mt-8 p-8 bg-linear-to-r from-dark to-indigo rounded-2xl shadow-2xl border border-gray-800/50 backdrop-blur-sm">
  {/* Header */}
  <div className="mb-8">
    <div className="flex items-center gap-3 mb-2">
      <div className="p-2.5 bg-linear-to-br from-indigo-600 to-purple-600 rounded-xl shadow-lg">
        <FaKey className="w-6 h-6 text-white" />
      </div>
      <div>
        <h2 className="text-2xl font-bold bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Update Password
        </h2>
        <p className="text-gray-400 text-sm mt-1">Secure your account with a new password</p>
      </div>
    </div>
    
    {/* Password Requirements */}
   
  </div>

  {/* Password Form */}
  <div className="space-y-6">
    {/* Old Password */}
    <div className="group">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
            Old Password
          </span>
          <FaInfoCircle className="w-3.5 h-3.5 text-gray-500 hover:text-gray-300 transition-colors cursor-help" />
        </div>
        <span className="text-xs text-gray-500 bg-gray-900 px-3 py-1 rounded-full">
          Required
        </span>
      </div>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-400">
        </div>
        <Input
          placeholder="Enter your current password"
          type="password"
          className="w-full pl-12 pr-12 py-3 bg-gray-900/80 border border-gray-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-white placeholder:text-gray-600 rounded-xl transition-all duration-300 outline-none"
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-300 transition-colors p-1.5 hover:bg-gray-800 rounded-lg">
          <FaEyeSlash className="w-5 h-5" />
        </button>
      </div>
    </div>

    {/* New Password */}
    <div className="group">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
            New Password
          </span>
          <FaInfoCircle className="w-3.5 h-3.5 text-gray-500 hover:text-gray-300 transition-colors cursor-help" />
        </div>
        <span className="text-xs text-green-500 bg-green-500/10 px-3 py-1 rounded-full">
          Must meet requirements
        </span>
      </div>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-400">
        </div>
        <Input
          placeholder="Create a strong password"
          type="password"
          className="w-full pl-12 pr-12 py-3 bg-gray-900/80 border border-gray-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-white placeholder:text-gray-600 rounded-xl transition-all duration-300 outline-none"
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-300 transition-colors p-1.5 hover:bg-gray-800 rounded-lg">
          <FaEye className="w-5 h-5" />
        </button>
      </div>
      
     
    </div>

    {/* Confirm Password */}
    <div className="group">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
            Confirm Password
          </span>
          <FaInfoCircle className="w-3.5 h-3.5 text-gray-500 hover:text-gray-300 transition-colors cursor-help" />
        </div>
        <span className="text-xs text-red-500 bg-red-500/10 px-3 py-1 rounded-full">
          Must match
        </span>
      </div>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-400">
        </div>
        <Input
          placeholder="Re-enter your new password"
          type="password"
          className="w-full pl-12 pr-12 py-3 bg-gray-900/80 border border-gray-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-white placeholder:text-gray-600 rounded-xl transition-all duration-300 outline-none"
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-300 transition-colors p-1.5 hover:bg-gray-800 rounded-lg">
          <FaEyeSlash className="w-5 h-5" />
        </button>
      </div>
      
     
    </div>

    {/* Action Buttons */}
    <div className="pt-4 border-t border-gray-800/50">
      <div className="flex gap-3">
        <div className=" w-full">

        <Button title="Update Password"/>
        </div>
     
        {/* <button className="px-6 py-3.5 bg-gray-900/80 border border-gray-800 hover:bg-gray-800 text-gray-300 font-medium rounded-xl transition-all duration-300">
          Cancel
        </button> */}
      </div>
    </div>
  </div>
</div>
  );
}
