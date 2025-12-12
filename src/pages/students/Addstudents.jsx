// import React, { useEffect, useState } from "react";
// import { Button } from "../../components/Button";
// import { Input, FileInput } from "../../components/InputFields";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
// import { environment } from "../../environment/environment";
// import { addStudentSchema, addUserSchema } from "../../services/validation/ZodSchema";
// import { UserService } from "../../services/UserService";

// const AddStudents = () => {
//   const service = new UserService();
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(addStudentSchema),
//     defaultValues: {
//       user_name: "",
//       uni_uni_email: "",
//       phone_number: "",
//       enrollment_no: "",
//       registration_no: "",
//       semester: "",
//       expected_gradyear: "",
//       admission_year: "",

//       gender: "Male",
//     },
//     mode: "onChange",
//   });

//   useEffect(() => {
//     console.log("Form errors:", errors);
//   }, [errors]);

//   async function submit(data) {
//     try {
//       const response = await service.addStudents(data);
//       console.log("✅ Response Added:", response);
//       reset();
//     } catch (error) {
//       console.error("❌ Error adding university:", error);
//       alert("Failed to add university");
//     }
//   }

//   return (
//     <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 max-w-4xl mx-auto">
//       {/* Form Header */}
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold text-gray-800">Add User</h2>
//         <p className="text-sm text-gray-600 mt-1">Add a new User</p>
//       </div>

//       {/* Form */}
//       <form onSubmit={handleSubmit(submit)}>
//         <div className="space-y-6">
//           {/* Row 1 */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 user Name *
//               </label>
//               <Input
//                 register={register}
//                 name="user_name"
//                 type="text"
//                 placeholder="Enter First Name"
//               />
//               {errors.user_name && (
//                 <p className="text-red-500 text-sm">
//                   {errors.user_name.message}
//                 </p>
//               )}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 uni_email
//               </label>
//               <Input
//                 register={register}
//                 name="uni_email"
//                 type="email"
//                 placeholder="Enter uni email"
//               />
//               {errors.uni_email && (
//                 <p className="text-red-500 text-sm">
//                   {errors.uni_email.message}
//                 </p>
//               )}
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 phone_number*
//               </label>
//               <Input
//                 register={register}
//                 name="phone_number"
//                 type="number"
//                 placeholder="Enter phone_number"
//               />
//               {errors.phone_number && (
//                 <p className="text-red-500 text-sm">
//                   {errors.phone_number.message}
//                 </p>
//               )}
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 enrollment_no*
//               </label>
//               <Input
//                 register={register}
//                 name="enrollment_no"
//                 type="text"
//                 placeholder="Enter enrollment_no"
//               />
//               {errors.enrollment_no && (
//                 <p className="text-red-500 text-sm">
//                   {errors.enrollment_no.message}
//                 </p>
//               )}
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 registration_no*
//               </label>
//               <Input
//                 register={register}
//                 name="registration_no"
//                 type="string"
//                 placeholder="Enter registration_no"
//               />
//               {errors.registration_no && (
//                 <p className="text-red-500 text-sm">
//                   {errors.registration_no.message}
//                 </p>
//               )}
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 semester*
//               </label>
//               <Input
//                 register={register}
//                 name="semester"
//                 type="number"
//                 placeholder="Enter semester"
//               />
//               {errors.semester && (
//                 <p className="text-red-500 text-sm">
//                   {errors.semester.message}
//                 </p>
//               )}
//             </div>
//           </div>


//        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 expected_gradyear*
//               </label>
//               <Input
//                 register={register}
//                 name="expected_gradyear"
//                 type="text"
//                 placeholder="Enter expected_gradyear"
//               />
//               {errors.expected_gradyear && (
//                 <p className="text-red-500 text-sm">
//                   {errors.expected_gradyear.message}
//                 </p>
//               )}
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 admission_year*
//               </label>
//               <Input
//                 register={register}
//                 name="admission_year"
//                 type="text"
//                 placeholder="Enter admission_year"
//               />
//               {errors.admission_year && (
//                 <p className="text-red-500 text-sm">
//                   {errors.admission_year.message}
//                 </p>
//               )}
//             </div>
//           </div>

//            <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 gender*
//               </label>
//               <Input
//                 register={register}
//                 name="gender"
//                 type="text"
//                 placeholder="Enter gender"
//               />
//               {errors.gender && (
//                 <p className="text-red-500 text-sm">
//                   {errors.gender.message}
//                 </p>
//               )}
//             </div>
//           {/* Submit Button */}
//           <div className="pt-4">
//             <Button title="Add Students" />
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddStudents;
