import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Input, FileInput } from "../../components/InputFields";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { UnversityService } from "../../services/UniversityService";
import {
  addUniversitySchema,
  updateUniversitySchema,
} from "../../services/validation/ZodSchema";
import { environment } from "../../environment/environment";
import { useNavigate, useParams } from "react-router-dom";
import { Heading, SubText } from "../../components/Typography";
import ImageUploadField from "../../components/ImageUploadField";
import { useApi } from "../../helper/UseApi";

const AddUniversity = () => {
  const service = new UnversityService();
  const { id } = useParams();
  const { request, loading, error } = useApi(service);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(id ? updateUniversitySchema : addUniversitySchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      logo: "",
      domain: "",
      location: "",
    },
    mode: "onChange",
  });
  console.log(getValues());
  useEffect(() => {
    console.log("Form errors:", errors);
  }, [errors]);

  async function getUniversitybyid(id) {
    const data = await request("getUniversitybyiD", id);
    if (data) {
      reset({
        email: data.user?.email || "-",
        role: data.user?.role || "-",
        name: data.name || "-",
        logo: data.logo,
        domain: data.domain || "-",
        location: data.location || "-",
      });
    }

    if (error) {
      console.log(error);
    }
    // try {
    //   const response = await service.getUniversitybyiD(id);
    //   const data = response?.data;
    //   console.log(response.data);
    //   reset({
    //     email: data.user?.email || "-",
    //     role: data.user?.role || "-",
    //     name: data.name || "-",
    //     logo: data.logo,
    //     domain: data.domain || "-",
    //     location: data.location || "-",
    //     totalStudents: data.totalStudents || "-",
    //     verifiedUsers: data.verifiedUsers || "-",
    //   });
    // } catch (error) {
    //   console.log("Error fetching single university", error);
    // }
  }

  useEffect(() => {
    if (id) {
      getUniversitybyid(id);
    }
  }, [id, reset]);

  async function submit(formData) {
    if (id) {
      await request("updateUniversity", id, formData);
      if (error) {
        console.log("API Error:", error);
      } else {
        navigate("/university");
      }
    } else {
      const res = await request("addUniversity", formData);

       if (res?.error) {
    return;
  }

      reset();
    }
  }
  useEffect(() => {
  if (error) {
    console.log("API Error:", error.text);
  }
}, [error]);


  // async function submit(data) {
  //   try {
  //     if (id) {
  //       const response = await service.updateUniversity(data, id);
  //       if (response.success === true) {
  //         console.log("update university", response);
  //         navigate("/university");
  //       } else {
  //         console.log("error updating university", response);
  //       }
  //     } else {
  //       const response = await service.addUniversity(data);
  //       console.log("✅ Response Added:", response);
  //       reset();
  //     }
  //   } catch (error) {
  //     console.log("errorrrrrr", error);
  //   }
  // }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 max-w-4xl mx-auto">
      {/* Form Header */}
      <div className="mb-6">
        <Heading title={id ? "Edit University" : "Add University"} />
        <SubText text="add university" />
      </div>
    {error && (
        <p className="text-red-600 bg-red-100 p-2 rounded mt-2 mb-4">{error.text}</p>
      )}
      {/* Form */}
      <form onSubmit={handleSubmit(submit)}>
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
                id={id}
                placeholder="Enter Email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
          </div>
          {!id && (
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
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

            <div>
              <ImageUploadField
                name="logo"
                label="Upload Logo"
                folder="university" // OR whatever folder you store logos in
                errors={errors}
                defaultimage={getValues("logo")} // show previous logo if editing
                onUploadSuccess={(url) => {
                  setValue("logo", url);
                  console.log(getValues("logo"));
                }}
              />

              {errors.logo && (
                <p className="text-red-500 text-sm">{errors.logo.message}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button title={id ? "Update University" : "Add University"} />
          </div>
        </div>
      </form>
      
    </div>
  );
};

export default AddUniversity;
