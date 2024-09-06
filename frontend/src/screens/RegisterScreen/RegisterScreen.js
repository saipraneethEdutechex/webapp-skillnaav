import React, { useState } from "react";
import axios from "axios";
import Loading from "../../Warnings/Loading/Loading";
import { useNavigate } from "react-router-dom";

const RegisterScreen = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const validateForm = () => {
    if (!name || !email || !password || !confirmPassword || !profilePic) {
      setError("All fields are required.");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return false;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("profilePic", profilePic);

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/users/register",
        {
          name,
          profilePic,
          email,
          password,
        },
        config
      );
      setLoading(false);
      navigate("/mainpage2");
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Register
        </h2>

        {error && (
          <div className="bg-red-200 text-red-600 p-2 mt-4 text-center rounded">
            {error}
          </div>
        )}
        {message && (
          <div className="bg-green-200 text-green-600 p-2 mt-4 text-center rounded">
            {message}
          </div>
        )}

        {loading ? (
          <Loading />
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-4"
            encType="multipart/form-data"
          >
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-600"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:border-blue-500 focus:bg-white focus:outline-none"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-600"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:border-blue-500 focus:bg-white focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-600"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:border-blue-500 focus:bg-white focus:outline-none"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-600"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:border-blue-500 focus:bg-white focus:outline-none"
                placeholder="Confirm your password"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-600"
                htmlFor="profilePic"
              >
                Profile Picture
              </label>
              <input
                type="file"
                id="profilePic"
                onChange={(e) => setProfilePic(e.target.files[0])}
                className="w-full mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none"
                accept="image/*"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Register
            </button>
          </form>
        )}

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterScreen;
