import React from "react";
import { Input } from "../../../components/InputFields";
import { Button } from "../../../components/Button";

export default function ChangePassword() {
  return (
    <div className="mt-6 space-y-5">
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">
          Old Password
        </label>
        <Input placeholder="Enter old password" type="password" />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">
          New Password
        </label>
        <Input placeholder="Enter new password" type="password" />
      </div>

      <div>
        <babel className="text-sm font-medium text-gray-700 mb-1 block">
          Confirm Password
        </babel>
        <Input placeholder="Re-enter new password" type="password" />
      </div>

      <Button title="Update Password" />
    </div>
  );
}
