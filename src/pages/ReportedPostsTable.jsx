import React from 'react';
import { Heading, SubText } from '../components/Typography';

const ReportedPostsTable = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Table Header */}
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <h2 className="text-lg font-semibold text-gray-800"></h2>
        
        <Heading title="Reported Posts"/>
        <SubText text="Posts reported by users for moderation review"/>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Report Details
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Post & Reporter
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action Taken
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4">
                <div className="max-w-md">
                  <div className="text-sm font-medium text-gray-900">rp123</div>
                  <div className="text-sm text-gray-600 mt-1">Spam / off-topic</div>
                  <div className="text-xs text-gray-500 mt-1">2 hours ago</div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    post123
                  </span>
                  <div className="text-sm text-gray-900">Reported by: uid2</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  pending
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">No action yet</div>
              </td>
            </tr>
            
            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4">
                <div className="max-w-md">
                  <div className="text-sm font-medium text-gray-900">rp124</div>
                  <div className="text-sm text-gray-600 mt-1">Inappropriate content</div>
                  <div className="text-xs text-gray-500 mt-1">1 day ago</div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    post456
                  </span>
                  <div className="text-sm text-gray-900">Reported by: uid5</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  actioned
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="space-y-1">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    delete
                  </span>
                  <div className="text-xs text-gray-500">By: modUid</div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4">
                <div className="max-w-md">
                  <div className="text-sm font-medium text-gray-900">rp125</div>
                  <div className="text-sm text-gray-600 mt-1">Harassment</div>
                  <div className="text-xs text-gray-500 mt-1">3 days ago</div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    post789
                  </span>
                  <div className="text-sm text-gray-900">Reported by: uid8</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  reviewed
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="space-y-1">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                    warn
                  </span>
                  <div className="text-xs text-gray-500">By: adminUid</div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4">
                <div className="max-w-md">
                  <div className="text-sm font-medium text-gray-900">rp126</div>
                  <div className="text-sm text-gray-600 mt-1">Misinformation</div>
                  <div className="text-xs text-gray-500 mt-1">1 week ago</div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    post101
                  </span>
                  <div className="text-sm text-gray-900">Reported by: uid3</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  actioned
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="space-y-1">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    none
                  </span>
                  <div className="text-xs text-gray-500">By: modUid</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportedPostsTable;