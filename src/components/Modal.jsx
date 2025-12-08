// AddBadgeModal.jsx
import { useEffect, useState } from "react";
import { Input } from "./InputFields";
import ImageUploadField from "./ImageUploadField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { addUniBadge } from "../services/validation/ZodSchema";
import { BadgeService } from "../services/BadgeService";
import { useApi } from "../helper/UseApi";

export function AddBadgeModal({ open, onClose, id, initialData = null }) {
  const service = new BadgeService();
  const [isEditMode, setIsEditMode] = useState(false);
  const { request, loading, error } = useApi(service);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(addUniBadge),
    mode: "onChange",
  });

  useEffect(() => {
    if (initialData?.id) {
      setIsEditMode(true);
      reset({
        badge_name: initialData.badge_name || "",
        condition_date: initialData.condition_date || "",
        badge_url: initialData.badge_url || "",
      });
    } else {
      setIsEditMode(false);

      reset({
        badge_name: "",
        condition_date: "",
        badge_url: "",
      });
    }
  }, [initialData, reset]);

  // async function Submit(data) {
  //   try {
  //     if (isEditMode && initialData?.id) {
  //       // Edit mode - update existing badge
  //       await service.updatebadge(initialData.id, {
  //         badge_name: data.badge_name,
  //         condition_date: data.condition_date,
  //         badge_url: data.badge_url,
  //         universityId: parseInt(id),
  //       });
  //       console.log("✅ Badge updated:", data);
  //     } else {
  //       // Add mode - create new badge
  //       await service.addBadge({
  //         badge_name: data.badge_name,
  //         condition_date: data.condition_date,
  //         badge_url: data.badge_url,
  //         universityId: parseInt(id),
  //       });
  //       console.log("✅ Badge added:", data);
  //     }
  //     reset();
  //     onClose();
  //   } catch (error) {
  //     console.log("Error:", error);
  //   }
  // }
  async function Submit(data) {
    try {
      if (isEditMode && initialData?.id) {
        // Edit mode - update existing badge
        await request("updatebadge", initialData.id, {
          badge_name: data.badge_name,
          condition_date: data.condition_date,
          badge_url: data.badge_url,
          universityId: parseInt(id),
        });
        console.log("✅ Badge updated:", data);
      } else {
        // Add mode - create new badge
        await request("addBadge", {
          badge_name: data.badge_name,
          condition_date: data.condition_date,
          badge_url: data.badge_url,
          universityId: parseInt(id),
        });
        console.log("✅ Badge added:", data);
      }
      reset();
      onClose();
    } catch (error) {
      console.log("Error:", error);
    }
  }
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4">
          {isEditMode ? "Edit Badge" : "Add New Badge"}
        </h2>

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
              defaultimage={isEditMode ? initialData?.badge_url : ""} // Fixed prop name
              onUploadSuccess={(url) => setValue("badge_url", url)}
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
            {isEditMode ? "Update Badge" : "Save Badge"}
          </button>
        </form>
      </div>
    </div>
  );
}
