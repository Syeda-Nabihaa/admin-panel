import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { Input, FileInput } from "../../components/InputFields";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { UnversityService } from "../../services/UniversityService";
import { environment } from "../../environment/environment";
import { addUserSchema } from "../../services/validation/ZodSchema";
import { UserService } from "../../services/UserService";

const AddUser = () => {
  const service = new UserService();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addUserSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "",

      avatarUrl: `${environment.baseUrl}abc.jpg`,
    },
    mode: "onChange",
  });

  useEffect(() => {
    console.log("Form errors:", errors);
  }, [errors]);

  async function submit(data) {
   
    try {
      const response = await service.addUser(data);
      console.log("✅ Response Added:", response);
      reset();
    } catch (error) {
      console.error("❌ Error adding university:", error);
      alert("Failed to add university");
    }
  }



  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 max-w-4xl mx-auto">
      {/* Form Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Add User
        </h2>
        <p className="text-sm text-gray-600 mt-1">Add a new User</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(submit)}>
        <div className="space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name *
              </label>
              <Input
                register={register}
                name="first_name"
                type="text"
                placeholder="Enter First Name"
              />
              {errors.first_name && (
                <p className="text-red-500 text-sm">{errors.first_name.message}</p>
              )}
            </div>
              <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                last Name *
              </label>
              <Input
                register={register}
                name="last_name"
                type="text"
                placeholder="Enter last name "
              />
              {errors.last_name && (
                <p className="text-red-500 text-sm">{errors.last_name.message}</p>
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
                logo *
              </label>
              <FileInput register={register} name="logo" />
            </div>
          </div>

     

          {/* Submit Button */}
          <div className="pt-4">
            <Button title="Add User" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
