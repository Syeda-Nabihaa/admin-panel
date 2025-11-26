import { useState } from "react";
import Input from "../../components/InputFields";
import Button from "../../components/Button";
import AuthService from "../../../../eproject/hotel-management-sysytem/src/services/AuthService";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const service = new AuthService();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData)
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await service.login(formData);
      console.log(res);

      alert("login Successful!");

      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Logo/Header Section */}
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-4">
            <span className="text-white font-bold text-xl">L</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600">Sign in to your account to continue</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <Input
                name="email"
                type="email"
                placeholder="Enter your email"
                label="Email Address"
                onChange={handleChange}
                required
              />
              <Input
                name="password"
                type="password"
                placeholder="Enter your password"
                label="Password"
                onChange={handleChange}
                required
              />
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
              type="submit"
              title={isLoading ? "Signing in..." : "Sign in"}
              disabled={isLoading}
              className="w-full"
            />

            {/* Sign Up Link */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
                >
                  Sign up
                </a>
              </p>
            </div>
          </form>
        </div>

        {/* Footer */}
      </div>
    </div>
  );
}
