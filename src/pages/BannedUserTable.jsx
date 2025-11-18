import React from "react";
import { Heading, SubText } from "../components/Typography";

const BannedUsersTable = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Table Header */}
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
       
        <Heading title="Banned Users" />
        <SubText
          text="User ban records and restrictions"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ban Details
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User & Moderator
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Duration
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Affected Communities
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4">
                <div className="max-w-md">
                  <div className="text-sm font-medium text-gray-900">
                    ban123
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Repeated spam
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Started: 2 hours ago
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="text-gray-600">Banned User:</span>
                    <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                      uid2
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-600">Banned by:</span>
                    <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                      modUid
                    </span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Permanent
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-1">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-1">
                    bahria-main
                  </span>
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    bahria-memes
                  </span>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4">
                <div className="max-w-md">
                  <div className="text-sm font-medium text-gray-900">
                    ban124
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Harassment</div>
                  <div className="text-xs text-gray-500 mt-1">
                    Started: 1 day ago
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="text-gray-600">Banned User:</span>
                    <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                      uid5
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-600">Banned by:</span>
                    <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                      adminUid
                    </span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  7 days
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-1">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-1">
                    bahria-main
                  </span>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4">
                <div className="max-w-md">
                  <div className="text-sm font-medium text-gray-900">
                    ban125
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Hate speech</div>
                  <div className="text-xs text-gray-500 mt-1">
                    Started: 3 days ago
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="text-gray-600">Banned User:</span>
                    <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                      uid8
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-600">Banned by:</span>
                    <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                      modUid
                    </span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                  30 days
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-1">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-1">
                    bahria-main
                  </span>
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mr-1">
                    bahria-memes
                  </span>
                  <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                    bahria-events
                  </span>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4">
                <div className="max-w-md">
                  <div className="text-sm font-medium text-gray-900">
                    ban126
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Multiple violations
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Started: 1 week ago
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="text-gray-600">Banned User:</span>
                    <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                      uid3
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-600">Banned by:</span>
                    <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                      adminUid
                    </span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Permanent
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-1">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-1">
                    bahria-main
                  </span>
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mr-1">
                    bahria-memes
                  </span>
                  <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full mr-1">
                    bahria-events
                  </span>
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                    bahria-tech
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BannedUsersTable;
