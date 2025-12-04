// AddBadgeModal.jsx
import { useState } from "react";
import { Input } from "./InputFields";
import ImageUploadField from "./ImageUploadField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { addUniBadge } from "../services/validation/ZodSchema";
import { BadgeService } from "../services/BadgeService";

export function AddBadgeModal({ open, onClose, id }) {
  const service = new BadgeService();
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addUniBadge),
    defaultValues: {
      badge_name: "",
      condition_date: "",
      badge_url: "",
    },
    mode: "onChange",
  });

  async function Submit(data) {
    try {
      const response = await service.addBadge({
        badge_name: data.badge_name,
        condition_date: data.condition_date,
        badge_url: data.badge_url,
        universityId: parseInt(id),
      });
      console.log("✅ Response Added:", response);
      reset();
    } catch (error) {
      console.log("errorrrrrr", error);
    }
  }
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4">Add New Badge</h2>

        <form onSubmit={handleSubmit(Submit)} className="space-y-4">
          {/* Badge Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Badge Name</label>
            <Input
              register={register}
              placeholder="Enter Badge Name"
              type="text"
              name="badge_name"
              required
            />
            {errors.badge_name && (
              <p className="text-red-500 text-sm">
                {errors.badge_name.message}
              </p>
            )}
          </div>

          {/* Condition Date */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Condition Date
            </label>
            <Input
              register={register}
              placeholder="Enter Badge Date"
              type="date"
              name="condition_date"
              required
            />
            {errors.condition_date && (
              <p className="text-red-500 text-sm">
                {errors.condition_date.message}
              </p>
            )}
          </div>

          {/* Badge URL */}
          <div>
            <ImageUploadField
              name="badge_url"
              label="Upload Badge"
              folder="badge"
              errors={errors}
              onUploadSuccess={(url) => {
                setValue("badge_url", url);
                console.log(getValues("badge_url"));
              }}
            />
            {errors.badge_url && (
              <p className="text-red-500 text-sm">{errors.badge_url.message}</p>
            )}
          </div>

          {/* Save button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Save Badge
          </button>
        </form>
      </div>
    </div>
  );
}
