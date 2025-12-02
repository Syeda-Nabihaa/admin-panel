import { z } from "zod";
export const loginSchema = z.object({
  email: z.string().email().min(4, "Email is required"),
  password: z.string().min(7, "Password is required"),
});
export const addUniversitySchema = z
  .object({
    name: z.string().trim().min(1, "Please Enter University Name"),
    email: z.string().email().min(4, "Email is required"),
    password: z
      .string()
      .min(7, "Password must be at least 7 characters")
      .regex(/[A-Z]/, "Must include an uppercase letter")
      .regex(/[a-z]/, "Must include a lowercase letter")
      .regex(/\d/, "Must include a number")
      .regex(/[!@#$%^&*]/, "Must include a special character"),
    confirmPassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters"),
    domain: z.string().optional(),
   
    totalStudents: z.number().int("Must be an integer").min(0, "Must be ≥ 0"),
    verifiedUsers: z.number().int("Must be an integer").min(0, "Must be ≥ 0"),
    location: z.string().min(1, "Location is required"),
    logo: z.string().min(1, "logo URL is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export const addUserSchema = z
  .object({
    first_name: z.string().trim().min(1, "Please Enter First Name"),
    last_name: z.string().trim().min(1, "Please Enter last Name"),
    email: z.string().email().min(4, "Email is required"),
    // password: z.string().min(6, "Password must be at least 6 characters"),
    password: z
      .string()
      .min(7, "Password must be at least 7 characters")
      .regex(/[A-Z]/, "Must include an uppercase letter")
      .regex(/[a-z]/, "Must include a lowercase letter")
      .regex(/\d/, "Must include a number")
      .regex(/[!@#$%^&*]/, "Must include a special character"),
    confirmPassword: z.string(),
    role: z.string().min(3, "Role is required"),
    avatarUrl: z.string().min(1, "logo URL is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

  
export const updateUniversitySchema = z.object({
 
  name: z.string(),
  logo: z.string(),
  domain: z.string(),
  location: z.string(),
  totalStudents: z.number(),
  verifiedUsers: z.number(),
});
