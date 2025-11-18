import React from 'react';
import { Heading, SubText } from '../components/Typography';

const UserVerificationTable = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Table Header */}
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
       
        <Heading title="User Verification"/>
        <SubText text="Email verification status and records"/>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Verification ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User & Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Verification Code
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Timeline
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">verif123</div>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-1">
                  <div className="text-sm">
                    <span className="text-gray-600">User:</span>
                    <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                      uid1
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">user@bahria.edu.pk</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-mono text-gray-900 bg-gray-100 px-2 py-1 rounded">
                  ABC123
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  pending
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-1">
                  <div className="text-sm text-gray-600">Sent: 2 hours ago</div>
                  <div className="text-sm text-gray-500">Not verified yet</div>
                </div>
              </td>
            </tr>
            
            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">verif124</div>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-1">
                  <div className="text-sm">
                    <span className="text-gray-600">User:</span>
                    <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                      uid2
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">student@bahria.edu.pk</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-mono text-gray-900 bg-gray-100 px-2 py-1 rounded">
                  XYZ789
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  verified
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-1">
                  <div className="text-sm text-gray-600">Sent: 1 day ago</div>
                  <div className="text-sm text-green-600">Verified: 12 hours ago</div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">verif125</div>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-1">
                  <div className="text-sm">
                    <span className="text-gray-600">User:</span>
                    <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">
                      uid3
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">test@bahria.edu.pk</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-mono text-gray-900 bg-gray-100 px-2 py-1 rounded">
                  DEF456
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  pending
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-1">
                  <div className="text-sm text-gray-600">Sent: 3 days ago</div>
                  <div className="text-sm text-gray-500">Expired</div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">verif126</div>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-1">
                  <div className="text-sm">
                    <span className="text-gray-600">User:</span>
                    <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                      uid4
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">newuser@bahria.edu.pk</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-mono text-gray-900 bg-gray-100 px-2 py-1 rounded">
                  GHI789
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  verified
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-1">
                  <div className="text-sm text-gray-600">Sent: 1 week ago</div>
                  <div className="text-sm text-green-600">Verified: 6 days ago</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserVerificationTable;