import React from 'react';
import { Heading, SubText } from '../components/Typography';

const ConversationsTable = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Table Header */}
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
       
        <Heading title="Conversations"/>
        <SubText text="  User conversations and message history"/>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Participants
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Message
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Active
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Unread Messages
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    uid1
                  </span>
                  <span className="text-gray-400">↔</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    uid2
                  </span>
                </div>
                <div className="text-xs text-gray-500 mt-1">conv123</div>
              </td>
              <td className="px-6 py-4">
                <div className="max-w-md">
                  <div className="text-sm text-gray-900">See you tomorrow!</div>
                  <div className="text-xs text-gray-500 mt-1">Last sent by: uid1</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">2 hours ago</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center space-x-4">
                  <div className="text-sm">
                    <span className="text-gray-600">uid1:</span>
                    <span className="ml-1 text-green-600">0</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-600">uid2:</span>
                    <span className="ml-1 bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full">2</span>
                  </div>
                </div>
              </td>
            </tr>
            
            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    uid3
                  </span>
                  <span className="text-gray-400">↔</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    uid4
                  </span>
                </div>
                <div className="text-xs text-gray-500 mt-1">conv456</div>
              </td>
              <td className="px-6 py-4">
                <div className="max-w-md">
                  <div className="text-sm text-gray-900">Did you finish the assignment?</div>
                  <div className="text-xs text-gray-500 mt-1">Last sent by: uid4</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">30 minutes ago</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center space-x-4">
                  <div className="text-sm">
                    <span className="text-gray-600">uid3:</span>
                    <span className="ml-1 bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full">1</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-600">uid4:</span>
                    <span className="ml-1 text-green-600">0</span>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    uid5
                  </span>
                  <span className="text-gray-400">↔</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    uid6
                  </span>
                </div>
                <div className="text-xs text-gray-500 mt-1">conv789</div>
              </td>
              <td className="px-6 py-4">
                <div className="max-w-md">
                  <div className="text-sm text-gray-900">Meeting at the library at 3 PM</div>
                  <div className="text-xs text-gray-500 mt-1">Last sent by: uid5</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">1 day ago</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center space-x-4">
                  <div className="text-sm">
                    <span className="text-gray-600">uid5:</span>
                    <span className="ml-1 text-green-600">0</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-600">uid6:</span>
                    <span className="ml-1 text-green-600">0</span>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-gray-50 transition-colors duration-150 bg-blue-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    uid7
                  </span>
                  <span className="text-gray-400">↔</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    uid8
                  </span>
                </div>
                <div className="text-xs text-gray-500 mt-1">conv101</div>
              </td>
              <td className="px-6 py-4">
                <div className="max-w-md">
                  <div className="text-sm text-gray-900">Are you coming to the event tonight?</div>
                  <div className="text-xs text-gray-500 mt-1">Last sent by: uid8</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Just now</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center space-x-4">
                  <div className="text-sm">
                    <span className="text-gray-600">uid7:</span>
                    <span className="ml-1 bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full">3</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-600">uid8:</span>
                    <span className="ml-1 text-green-600">0</span>
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

export default ConversationsTable;