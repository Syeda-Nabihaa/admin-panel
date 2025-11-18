import React from 'react';
import { Heading, SubText } from '../components/Typography';

const SearchIndexTable = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Table Header */}
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
       
         <Heading title="Search Index"/>
                <SubText text="Search optimization and keyword indexing
"/>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Index ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Entity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Keywords
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tags
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Updated
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">si123</div>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-1">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    post
                  </span>
                  <div className="text-sm text-gray-900">post123</div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-wrap gap-1 max-w-xs">
                  <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">midterms</span>
                  <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">exam</span>
                  <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">study</span>
                  <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">tips</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-wrap gap-1 max-w-xs">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">ExamTips</span>
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">BBA26</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">2 hours ago</div>
              </td>
            </tr>
            
            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">si124</div>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-1">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    comment
                  </span>
                  <div className="text-sm text-gray-900">cmt456</div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-wrap gap-1 max-w-xs">
                  <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">assignment</span>
                  <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">due</span>
                  <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">help</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-wrap gap-1 max-w-xs">
                  <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">CS101</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">1 day ago</div>
              </td>
            </tr>

            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">si125</div>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-1">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    post
                  </span>
                  <div className="text-sm text-gray-900">post789</div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-wrap gap-1 max-w-xs">
                  <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">campus</span>
                  <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">event</span>
                  <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">tech</span>
                  <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">fest</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-wrap gap-1 max-w-xs">
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">CampusEvents</span>
                  <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded">TechFest</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">3 days ago</div>
              </td>
            </tr>

            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">si126</div>
              </td>
              <td className="px-6 py-4">
                <div className="space-y-1">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    comment
                  </span>
                  <div className="text-sm text-gray-900">cmt101</div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-wrap gap-1 max-w-xs">
                  <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">study</span>
                  <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">group</span>
                  <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">meeting</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-wrap gap-1 max-w-xs">
                  <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">StudyGroup</span>
                  <span className="inline-block bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded">BBA</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">1 week ago</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchIndexTable;