import React from 'react';
import { Heading, SubText } from '../components/Typography';

const PostsTable = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Table Header */}
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
      
        <Heading title="Posts"/>
        <SubText text="Community posts and engagement metrics"/>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Post
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Community
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Engagement
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Visibility
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4">
                <div className="max-w-md">
                  <div className="text-sm font-medium text-gray-900">Midterms are over!</div>
                  <div className="text-sm text-gray-600 mt-1">Finally cleared my midterms...</div>
                  <div className="text-xs text-gray-500 mt-1">By: uid1 • 2 hours ago</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  bahria-main
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  text
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center text-green-600">
                    <span>2</span>
                  </div>
                  <div className="flex items-center text-red-600">
                    <span>1</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span>4 comments</span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  university-only
                </span>
              </td>
            </tr>
            
            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4">
                <div className="max-w-md">
                  <div className="text-sm font-medium text-gray-900">Campus Event Photos</div>
                  <div className="text-sm text-gray-600 mt-1">Check out these amazing shots from the tech fest!</div>
                  <div className="flex space-x-2 mt-2">
                    <div className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">2 images</div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">By: uid5 • 1 day ago</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  bahria-events
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                  image
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center text-green-600">
                    <span>15</span>
                  </div>
                  <div className="flex items-center text-red-600">
                    <span>2</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span>8 comments</span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  public
                </span>
              </td>
            </tr>

            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4">
                <div className="max-w-md">
                  <div className="text-sm font-medium text-gray-900">Study Group Forming</div>
                  <div className="text-sm text-gray-600 mt-1">Looking for CS students to form a study group for finals...</div>
                  <div className="flex space-x-2 mt-2">
                    <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Anonymous</div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">1 day ago</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  bahria-main
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  text
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center text-green-600">
                    <span>7</span>
                  </div>
                  <div className="flex items-center text-red-600">
                    <span>0</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span>12 comments</span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  university-only
                </span>
              </td>
            </tr>

            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4">
                <div className="max-w-md">
                  <div className="text-sm text-gray-600">Just shared some memes about campus life...</div>
                  <div className="flex space-x-2 mt-2">
                    <div className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">1 image</div>
                    <div className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">mixed</div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">By: uid8 • 3 hours ago</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  bahria-memes
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  mixed
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center text-green-600">
                    <span>23</span>
                  </div>
                  <div className="flex items-center text-red-600">
                    <span>3</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span>5 comments</span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  public
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostsTable;