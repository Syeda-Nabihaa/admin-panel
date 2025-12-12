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
    domain: z
      .string()
      .regex(
        /^[A-Za-z0-9.-]+\.edu(\.[A-Za-z]{2,})+$/,
        "Domain must be like harvard.edu.uk "
      ),

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
});

export const addUniBadge = z.object({
  badge_name: z.string().min(1, "Badge name is required"),
  condition_date: z.string(),
  badge_url: z.string().min(1, "logo URL is required"),
});

export const addStudentSchema = z.object({
  user_name: z.string().trim().min(1, "Please Enter First Name"),

  uni_email: z.string().email().min(4, "Email is required"),
  phone_number: z.coerce.number().min(1, "Phone Number is required"),
  enrollment_no: z.string().min(4, "Enrollemnt number is required"),
  registration_no: z.string().min(4, "Registration number is required"),
  semester: z.coerce.number().min(4, "Semester is required"),
  expected_gradyear: z.string().min(4, "Gaduation year is required"),
  admission_year: z.string().min(4, "admissionyear is required"),
  gender: z.string().min(4, "Gender is required"),
});
