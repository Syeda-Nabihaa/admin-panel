import React, { useEffect, useState } from "react";
import { Input } from "../../components/InputFields";
import { Button } from "../../components/Button";
import { Heading, SubText } from "../../components/Typography";
import { Link } from "react-router-dom";
import { UserService } from "../../services/UserService";

export default function User() {
  const [user, setUser] = useState([]);
  const service = new UserService();

  async function getAllData() {
    try {
      const res = await service.getAlluser();
      setUser(res?.data?.users);

      console.log("res.data.user", res?.data?.users);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Table Header */}

      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex items-center">
        <div>
          <Heading title="Users" />
          <SubText text=" All users registered" />
        </div>

        <Link to="/adduser" className="ml-auto">
          <Button title="Add Users" />
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                First Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {Array.isArray(user) && user.length > 0 ? (
              user.map((u) => (
                <tr
                  key={u.id}
                  className="hover:bg-gray-50 transition-colors duration-150"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{u.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {u.userDetail[0]?.first_name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {u.userDetail[0]?.last_name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{u.role}</div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="px-6 py-4 text-center text-sm text-gray-500"
                >
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
