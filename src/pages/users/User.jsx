import React, { useEffect, useState } from "react";
import { Input } from "../../components/InputFields";
import Button from "../../components/Button";
import { Heading, SubText } from "../../components/Typography";
import { Link } from "react-router-dom";
import { UserService } from "../../services/UserService";

export default function User() {
  const [user, setUser] = useState([]);
  const service = new UserService();

  async function getAllData() {
    try {
      const res = await service.getAlluser();
      setUser(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error.msg);
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
            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img
                      className="h-10 w-10 rounded-full object-cover border border-gray-200"
                      src="https://via.placeholder.com/40"
                      alt="University logo"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      uni@gmail.com
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">abc</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">xyz</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Student</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
