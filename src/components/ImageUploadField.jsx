import React, { useState, useEffect } from "react";
import { AllApiEndPoints } from "../services/ApiUrl";
import { motion } from "framer-motion";
import axios from "axios";
import axiosInstance from "../services/interceptor/interceptor";

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
  defaultimage = null, // This should update when editing different badges
  ...rest
}) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(defaultimage);

  // Add useEffect to update preview when defaultimage changes
  useEffect(() => {
    if (defaultimage !== preview) {
      setPreview(defaultimage);
    }
  }, [defaultimage]); // Add this useEffect

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
      const res = await axiosInstance.post(
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
        onUploadSuccess(fileUrl);
      }
    } catch (err) {
      setUploading(false);
      if (onUploadError) onUploadError(err);
    }
  };

  // Add function to remove image
  const handleRemoveImage = () => {
    setPreview("");
    if (onUploadSuccess) {
      onUploadSuccess(""); // Clear the value in form
    }
    // Also clear the file input
    const fileInput = document.getElementById(name);
    if (fileInput) {
      fileInput.value = "";
    }
  };

  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-white mb-2"
        >
          {label}
        </label>
      )}

      {/* Show preview if exists */}
      {preview && (
        <div className="mb-3 relative">
          <div className="inline-block relative">
            <img
              src={preview}
              alt="Badge Preview"
              className="h-32 w-32 object-contain rounded-lg border border-gray-300"
            />
            <button
              type="button"
              onClick={handleRemoveImage}
              className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transform -translate-y-1/2 translate-x-1/2"
              title="Remove image"
            >
              ×
            </button>
          </div>
          {uploading && (
            <span className="ml-3 text-sm text-blue-600">Uploading...</span>
          )}
        </div>
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

        {/* File input */}
        <input
          type="file"
          accept="image/*"
          id={name}
          name={name}
          {...(register ? register(name, validation) : {})}
          className="block w-full py-2 focus:outline-none"
          style={{ border: "none", padding: "12px 4px" }}
          onChange={handleFileChange}
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

      {/* Uploading indicator */}
      {!preview && uploading && (
        <motion.p
          className="mt-1 text-sm text-blue-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Uploading...
        </motion.p>
      )}

      {/* Helper text */}
      {!preview && !uploading && (
        <p className="mt-1 text-sm text-white">
          {defaultimage ? "Click to change image" : "Click to upload image"}
        </p>
      )}

      {/* Hidden input for react-hook-form validation */}
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