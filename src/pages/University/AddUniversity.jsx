import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import {Input, FileInput } from "../../components/InputFields";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { UnversityService } from "../../services/UniversityService";
import { addUniversitySchema } from "../../services/validation/ZodSchema";
import { environment } from "../../environment/environment";

const AddUniversity = () => {
  const service = new UnversityService();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addUniversitySchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      role: "",
      name: "",
      logo:`${environment.baseUrl}abc.jpg`,
      domain: "",
      location: "",
      totalStudents: 0,
      verifiedUsers: 0,
    },
     mode: "onChange"
  });

  useEffect(() => {
    console.log("Form errors:", errors);

  }, [errors, ]);

  async function submit(data) {
    console.log("✅ Submit function called!");
    console.log("📤 Valid Data:", data);
    try {
      const response = await service.addUniversity(data);
      console.log("✅ Response Added:", response);
      reset();
    } catch (error) {
      console.error("❌ Error adding university:", error);
      alert("Failed to add university");
    }
  }

  // Add this to check if handleSubmit is working
  const onSubmit = (data) => {
    console.log("🎯 handleSubmit triggered with data:", data);
    submit(data);
  };


  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 max-w-4xl mx-auto">
      {/* Form Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Add New University
        </h2>
        <p className="text-sm text-gray-600 mt-1">Add a new university</p>
      </div>

      {/* Form */}
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                University Name *
              </label>
              <Input
                register={register}
                name="name"
                type="text"
                placeholder="e.g., Bahria University Community"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <Input
                register={register}
                name="email"
                type="email"
                placeholder="Enter Email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password*
              </label>
              <Input
                register={register}
                name="password"
                type="Password"
                placeholder="Enter Password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password *
              </label>
              <Input
                register={register}
                name="confirmPassword"
                type="Password"
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Role*
              </label>
              <Input
                register={register}
                name="role"
                type="text"
                placeholder="Enter Role"
              />
              {errors.role && (
                <p className="text-red-500 text-sm">{errors.role.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                University Domain *
              </label>
              <Input
                register={register}
                name="domain"
                type="text"
                placeholder="Enter University Domain"
              />
              {errors.domain && (
                <p className="text-red-500 text-sm">{errors.domain.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location*
              </label>
              <Input
                register={register}
                name="location"
                type="text"
                placeholder="Enter Location"
              />
              {errors.location && (
                <p className="text-red-500 text-sm">
                  {errors.location.message}
                </p>
              )}
            </div>

            {/* <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                logo *
              </label>
              <FileInput register={register} name="logo" />
            </div> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Total Students*
              </label>
              <Input
                register={register}
                name="totalStudents"
                type="number"
                placeholder="Total Students"
                options={{ valueAsNumber: true }}
              />
              {errors.totalStudents && (
                <p className="text-red-500 text-sm">
                  {errors.totalStudents.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Veified Users *
              </label>
              <Input
                register={register}
                name="verifiedUsers"
                type="number"
                placeholder="Verified User"
                options={{ valueAsNumber: true }}
              />
              {errors.verifiedUsers && (
                <p className="text-red-500 text-sm">
                  {errors.verifiedUsers.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button title="Add University" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUniversity;
