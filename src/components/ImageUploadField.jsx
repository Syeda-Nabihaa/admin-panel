import React, { useState } from "react";
import { AllApiEndPoints } from "../services/ApiUrl";
import { motion } from "framer-motion";
import axios from "axios";

export default function ImageUploadField({
  name,
  label,
  register,
  errors = {},
  validation = {},
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  rightIconFuction,
  onUploadSuccess,
  folder,
  onUploadError,
  defaultimage = null,
  ...rest
}) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(defaultimage);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Create preview URL
    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);

    // Prepare form data
    const formData = new FormData();
    formData.append("file", file);
    formData.append("folder", folder);

    try {
      setUploading(true);
      const res = await axios.post(
        `${AllApiEndPoints.upload}?folder=${folder}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(res.data?.url);
      setUploading(false);

      const fileUrl = res.data?.url;

      if (fileUrl && onUploadSuccess) {
        onUploadSuccess(fileUrl); // This will update the form field via setValue
      }
    } catch (err) {
      setUploading(false);
      if (onUploadError) onUploadError(err);
    }
  };

  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
        </label>
      )}

      <div
        className={`relative flex items-center justify-between rounded-lg border-2
          focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent
          transition-colors ${
            errors?.[name] ? "border-red-500" : "border-gray-300"
          }`}
      >
        {LeftIcon && (
          <div className="inset-y-0 left-0 flex items-center px-2 pointer-events-none">
            <LeftIcon className="h-5 w-5 text-gray-400" />
          </div>
        )}

        {/* Remove register from input since we handle it manually */}
        <input
          type="file"
          accept="image/*" // Changed from {folder} to "image/*"
          id={name}
          name={name}
          {...(register ? register(name, validation) : {})}
          className="block w-full py-2 focus:outline-none"
          style={{ border: "none", padding: "12px 4px" }}
          onChange={handleFileChange} // Use custom handler
          {...rest}
        />

        {RightIcon && (
          <div
            className="absolute inset-y-0 right-0 flex items-center p-2 cursor-pointer"
            onClick={rightIconFuction}
          >
            <RightIcon className="h-5 w-5 text-gray-400" />
          </div>
        )}
      </div>

      {/* Preview Section */}
      {preview && (
        <div className="mt-3 flex items-center space-x-4">
          <img
            src={preview}
            alt="Preview"
            className="h-24 w-24 object-cover rounded-lg border"
          />
          {uploading && (
            <span className="text-sm text-blue-600">Uploading...</span>
          )}
        </div>
      )}

      {!preview && uploading && (
        <motion.p
          className="mt-1 text-sm text-blue-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Uploading...
        </motion.p>
      )}

      {/* Hidden input for react-hook-form validation (optional) */}
      <input type="hidden" {...(register ? register(name, validation) : {})} />

      {errors?.[name] && (
        <motion.p
          className="mt-1 text-sm text-red-600"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {errors[name].message}
        </motion.p>
      )}
    </div>
  );
}
