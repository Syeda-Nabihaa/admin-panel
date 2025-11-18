import React from 'react';

const UserWarningsTable = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Table Header */}
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <h2 className="text-lg font-semibold text-gray-800">User Warnings</h2>
        <p className="text-sm text-gray-600 mt-1">
          Warning records issued to users by moderators
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Warning Details
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User & Issuer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Related Content
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Warning Level
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4">
                <div className="max-w-md">
                  <div className="text-sm font-medium text-gray-900">warn123</div>
                  <div className="text-sm text-gray-600 mt-1">Inappropriate comment</div>
                  <div className="text-xs text-gray-500 mt-1">2 hours ago</div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="text-gray-600">User:</span>
                    <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                      uid2
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-600">Issued by:</span>
                    <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                      modUid
                    </span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  cmt456
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Level 1
                </span>
              </td>
            </tr>
            
            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4">
                <div className="max-w-md">
                  <div className="text-sm font-medium text-gray-900">warn124</div>
                  <div className="text-sm text-gray-600 mt-1">Spam posting</div>
                  <div className="text-xs text-gray-500 mt-1">1 day ago</div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="text-gray-600">User:</span>
                    <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                      uid5
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-600">Issued by:</span>
                    <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                      adminUid
                    </span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  post789
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Level 2
                </span>
              </td>
            </tr>

            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4">
                <div className="max-w-md">
                  <div className="text-sm font-medium text-gray-900">warn125</div>
                  <div className="text-sm text-gray-600 mt-1">Harassment</div>
                  <div className="text-xs text-gray-500 mt-1">3 days ago</div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="text-gray-600">User:</span>
                    <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                      uid8
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-600">Issued by:</span>
                    <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                      modUid
                    </span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  cmt101
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Level 3
                </span>
              </td>
            </tr>

            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4">
                <div className="max-w-md">
                  <div className="text-sm font-medium text-gray-900">warn126</div>
                  <div className="text-sm text-gray-600 mt-1">Hate speech violation</div>
                  <div className="text-xs text-gray-500 mt-1">1 week ago</div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="text-gray-600">User:</span>
                    <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                      uid3
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-600">Issued by:</span>
                    <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                      adminUid
                    </span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  post456
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Level 2
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserWarningsTable;