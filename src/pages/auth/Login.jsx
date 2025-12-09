import { useState } from "react";
import { Input } from "../../components/InputFields";
// import {Button} from "../../components/Button";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/AuthService";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../services/validation/ZodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Helper from "../../helper/Helper";
import { Button } from "../../components/Button";

export default function Login() {
  const service = new AuthService();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const [isLoading, setIsLoading] = useState(false);
  const helpers = new Helper();
  async function handlesubmit(formData) {
    setIsLoading(true);
    try {
      const res = await service.login(formData);
      console.log("ssjss",res);
      
      helpers.setToken(res.data.accessToken, res.data.refreshToken);

      alert("Login Successful!");
      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Logo/Header Section */}
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-4">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600">Sign in to your account to continue</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit(handlesubmit)}>
            <div className="space-y-6">
              <Input
                register={register}
                name="email"
                type="email"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
              <Input
                register={register}
                name="password"
                type="password"
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between mt-6 mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>

              <a
                href="#"
                className="text-sm text-indigo-600 hover:text-indigo-500 transition-colors"
              >
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <Button
              title={isLoading ? "Signing in..." : "Sign in"}
         
            />

            
          </form>
        </div>

        {/* Footer */}
      </div>
    </div>
  );
}
