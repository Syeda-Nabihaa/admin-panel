import React from "react";
import { Heading, SubText } from "../components/Typography";

const TrendingPostsTable = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Table Header */}
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <Heading title="Trending Posts" />
        <SubText
          text="          Popular and trending content across communities
"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Trending ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Post & Community
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Trending Score
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Timeline
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">tp123</div>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="text-gray-600">Post:</span>
                    <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                      post123
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-600">Community:</span>
                    <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                      bahria-main
                    </span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <span className="text-lg font-bold text-orange-600">95</span>
                  <div className="ml-2 w-16 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-orange-500 h-2 rounded-full"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-1">
                  <div className="text-sm text-gray-600">
                    Created: 2 hours ago
                  </div>
                  <div className="text-sm text-gray-500">Updated: Just now</div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">tp124</div>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="text-gray-600">Post:</span>
                    <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">
                      post456
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-600">Community:</span>
                    <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                      bahria-memes
                    </span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <span className="text-lg font-bold text-orange-600">87</span>
                  <div className="ml-2 w-16 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-orange-500 h-2 rounded-full"
                      style={{ width: "87%" }}
                    ></div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-1">
                  <div className="text-sm text-gray-600">
                    Created: 1 day ago
                  </div>
                  <div className="text-sm text-gray-500">
                    Updated: 30 mins ago
                  </div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">tp125</div>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="text-gray-600">Post:</span>
                    <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                      post789
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-600">Community:</span>
                    <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800">
                      bahria-events
                    </span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <span className="text-lg font-bold text-orange-600">76</span>
                  <div className="ml-2 w-16 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-orange-500 h-2 rounded-full"
                      style={{ width: "76%" }}
                    ></div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-1">
                  <div className="text-sm text-gray-600">
                    Created: 3 days ago
                  </div>
                  <div className="text-sm text-gray-500">
                    Updated: 2 hours ago
                  </div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">tp126</div>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="text-gray-600">Post:</span>
                    <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                      post101
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-600">Community:</span>
                    <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-pink-100 text-pink-800">
                      bahria-tech
                    </span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <span className="text-lg font-bold text-orange-600">92</span>
                  <div className="ml-2 w-16 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-orange-500 h-2 rounded-full"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-1">
                  <div className="text-sm text-gray-600">
                    Created: 1 week ago
                  </div>
                  <div className="text-sm text-gray-500">
                    Updated: 1 day ago
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrendingPostsTable;
