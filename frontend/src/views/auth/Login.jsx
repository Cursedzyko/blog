import { useEffect, useState } from "react";
import "../../index.css";
import Header from "../partials/Header";
import { Link } from "react-router-dom";
import Input from "../partials/Input";
import Footer from "../partials/Footer";
import { useParams, useNavigate } from "react-router-dom";

import apiInstance from "../../utils/axios";
import { useAuthStore } from "../../store/auth";
import { login, register } from "../../utils/auth";

const Login = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const [bioData, setBioData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const navigate = useNavigate();

  const handleBioData = (event) => {
    setBioData({
      ...bioData,
      [event.target.name]: event.target.value,
    });
  };

  const resetForm = () => {
    setBioData({
      email: "",
      password: "",
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await login(bioData.email, bioData.password);
    if (error) {
      alert(JSON.stringify(error));
      resetForm();
    } else {
      navigate("/");
    }

    // Reset isLoading to false when the operation is complete
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      <Header />
      <div className="bg-gradient-to-b from-gray-700 to-black bg-cover font-mono flex justify-center items-center ">
        {" "}
        {/* Login Box */}
        <div
          className={`bg-gray-900 p-8 rounded-lg shadow-lg w-full sm:w-100 m-4 transition-all duration-1000 ${
            isLoaded ? "animate-swim" : ""
          }`}
        >
          <div
            className={`mb-4 text-gray-400 flex justify-center ${
              isExiting ? "animate-fade-out" : isLoaded ? "animate-swim" : ""
            }`}
          >
            <h1 className="font-bold ">Login to User Profile</h1>
          </div>
          <form action="post" onSubmit={handleLogin} className="bg-gray-900 flex gap-4 flex-col">
            <div
              className={`relative ${
                isExiting
                  ? "animate-fade-out"
                  : isLoaded
                    ? "animate-swim-com"
                    : ""
              }`}
            >
              <Input
                type={"email"}
                label={"Email"}
                name="email"
                value={bioData.email}
                onChange={handleBioData}
              />
            </div>
            <div
              className={` relative ${
                isExiting
                  ? "animate-fade-out"
                  : isLoaded
                    ? "animate-swim-com1"
                    : ""
              }`}
            >
              <Input
                type={"password"}
                label={"Password"}
                name="password"
                value={bioData.password}
                onChange={handleBioData}
              />
            </div>
            <div
              className={` flex justify-between ${
                isExiting
                  ? "animate-fade-out"
                  : isLoaded
                    ? "animate-swim-com2"
                    : ""
              }`}
            >
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-primary-300 
          dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="remember"
                    className="text-gray-400 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <Link to="/forgot-password/" className="text-gray-400">
                Forget Password?
              </Link>
            </div>
            <div
              className={` w-full ${
                isExiting
                  ? "animate-fade-out"
                  : isLoaded
                    ? "animate-swim-com1"
                    : ""
              }`}
            >
              <button
                type="submit"
                className="w-full py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Login
              </button>
            </div>
          </form>
          <div
            className={`mb-4 text-gray-400 ${
              isExiting
                ? "animate-fade-out"
                : isLoaded
                  ? "animate-swim-com3"
                  : ""
            }`}
          >
            <Link to="/register/" className="cursor-pointer">
              Don&apos;t have account?
              <span className="text-blue-200 underline ml-0.5"> Sign Up</span>
            </Link>
          </div>
          <div
            className={`text-gray-400 flex flex-wrap justify-around ${
              isExiting
                ? "animate-fade-out"
                : isLoaded
                  ? "animate-swim-com3"
                  : ""
            }`}
          >
            <button className="btn btn-outline rounded-2xl px-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="20"
                height="20"
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.25 0 6.15 1.2 8.47 3.14l6.36-6.36C34.21 3.22 29.35 1.5 24 1.5 14.96 1.5 7.58 7.15 4.46 15.03l7.4 5.75C13.3 15.31 18.27 9.5 24 9.5z"
                ></path>
                <path
                  fill="#34A853"
                  d="M24 44.5c5.07 0 9.65-1.73 13.24-4.68l-6.46-5.27c-2.01 1.33-4.57 2.12-7.47 2.12-5.74 0-10.61-3.84-12.36-9.14l-7.27 5.6C7.32 39.94 15.17 44.5 24 44.5z"
                ></path>
                <path
                  fill="#4A90E2"
                  d="M43.6 24.5c0-1.18-.1-2.31-.3-3.41H24v7.32h11.02c-.47 2.51-1.86 4.64-3.96 6.05l6.46 5.27c3.8-3.51 6.08-8.69 6.08-15.23z"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M11.64 27.13c-.37-1.08-.58-2.25-.58-3.45s.21-2.37.58-3.45L4.37 14.62C2.8 17.51 2 20.66 2 24c0 3.34.8 6.49 2.37 9.38l7.27-5.6z"
                ></path>
              </svg>
              Google
            </button>
            <button className="btn btn-outline rounded-2xl px-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.01-1.02-.015-1.847-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.621.069-.609.069-.609 1.004.071 1.533 1.03 1.533 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.945 0-1.092.39-1.985 1.03-2.682-.103-.253-.447-1.27.098-2.647 0 0 .841-.27 2.75 1.025a9.564 9.564 0 012.5-.336 9.564 9.564 0 012.5.336c1.908-1.296 2.75-1.025 2.75-1.025.545 1.377.202 2.394.1 2.647.64.697 1.03 1.59 1.03 2.682 0 3.841-2.337 4.687-4.564 4.936.36.31.678.92.678 1.852 0 1.338-.012 2.415-.012 2.742 0 .268.18.579.688.481C19.134 20.164 22 16.418 22 12c0-5.516-4.477-10-10-10z" />
              </svg>
              GitHub
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
