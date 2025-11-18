import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/InputFields';


const AddCommunityForm = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 max-w-4xl mx-auto">
      {/* Form Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Add New Community</h2>
        <p className="text-sm text-gray-600 mt-1">
          Create a new main community or sub-community for your university
        </p>
      </div>

      {/* Form */}
      <div className="space-y-6">
        {/* Row 1: Community ID and University ID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Community ID *
            </label>
            <Input placeholder="e.g., bahria-main" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              University ID *
            </label>
            <Input placeholder="e.g., bahria-uni" />
          </div>
        </div>

        {/* Community Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Community Name *
          </label>
          <Input placeholder="e.g., Bahria University Community" />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description *
          </label>
          <textarea 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
            rows="3"
            placeholder="Brief description of the community..."
          />
        </div>

        {/* Row 2: Community Type and Created By */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Community Type *
            </label>
            <div className="space-y-2">
              <label className="inline-flex items-center">
                <input type="radio" name="type" className="text-blue-600 focus:ring-blue-500" />
                <span className="ml-2 text-gray-700">Main Community</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="type" className="text-blue-600 focus:ring-blue-500" />
                <span className="ml-2 text-gray-700">Sub Community</span>
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Created By *
            </label>
            <Input placeholder="e.g., system or user ID" />
          </div>
        </div>

        {/* Parent Community (Conditional) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Parent Community ID
          </label>
          <Input placeholder="e.g., bahria-main (for sub communities)" />
        </div>

        {/* Initial Rules */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Community Rules
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="e.g., Be respectful to all members" />
            <Input placeholder="e.g., No spam or advertising" />
            <Input placeholder="e.g., Stay on topic" />
            <Input placeholder="e.g., Keep discussions civil" />
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex space-x-4 pt-4">
          <Button title="Create Community"/>
          <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCommunityForm;