import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

type LoginFormData = {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log("Form Data:", data);
  };

//   const handleGoogleSignIn = () => {
//     console.log("Initiating Google Sign-In...");
//     // Integration logic goes here (Firebase, Auth0, Supabase, etc.)
//   };

  return (
    // Vibrant, ultra-modern mesh gradient background spanning the whole screen
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 px-4">
      
      {/* Modern glass-accentuated form card with subtle background blur */}
      <div className="w-full max-w-md bg-white/95 backdrop-blur-md shadow-2xl rounded-3xl p-8 sm:p-10 transition-all duration-300">
        
        {/* Header Section */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight">Welcome Back</h2>
          <p className="text-sm text-slate-500 mt-1">Please enter your details to sign in</p>
        </div>

        {/* Brand Google Authentication Option */}
        {/* <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold py-2.5 px-4 rounded-xl shadow-xs transition-all duration-150 text-sm cursor-pointer"
        >
          {/* Official Minimal Google Flat Icon SVG */}
          {/* <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#EA4335"
              d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.33 0 3.33 2.69 1.41 6.62l3.856 3.145z"
            />
            <path
              fill="#FBBC05"
              d="M16.04 15.345c-1.045.745-2.42 1.164-4.04 1.164a7.077 7.077 0 0 1-6.734-4.856L1.41 14.8C3.33 18.73 7.33 21.42 12 21.42c3.155 0 6.027-1.127 8.218-3.073l-4.178-3.002z"
            />
            <path
              fill="#4285F4"
              d="M23.49 12.273c0-.818-.073-1.61-.21-2.382H12v4.545h6.464a5.53 5.53 0 0 1-2.4 3.636l4.177 3.002c2.446-2.255 3.85-5.573 3.85-9.8z"
            />
            <path
              fill="#34A853"
              d="M5.266 14.235L1.41 17.38C3.33 21.42 7.33 21.42 12 21.42c-3.155 0-5.718-.89-7.534-2.42l.8-.62c.594.43 1.343.725 2.127.817a7.077 7.077 0 0 1-2.127-4.962z"
            />
          </svg>
          Sign in with Google */}
        {/* </button> */} 

        {/* Separator / Divider line */}
        {/* <div className="flex items-center my-5">
          <div className="flex-1 h-px bg-slate-200"></div>
          <span className="px-3 text-xs text-slate-400 font-medium uppercase tracking-wider bg-white">or</span>
          <div className="flex-1 h-px bg-slate-200"></div>
        </div> */}

        {/* Main Credentials Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          
          {/* Email Input Field */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              className={`w-full px-4 py-2.5 border rounded-xl text-slate-800 placeholder-slate-400 bg-slate-50/50 transition-all duration-200 outline-none text-sm
                `}
              placeholder="name@company.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs font-medium mt-1 pl-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Input Field */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
              Password
            </label>
            <input
              type="password"
              className={`w-full px-4 py-2.5 border rounded-xl text-slate-800 placeholder-slate-400 bg-slate-50/50 transition-all duration-200 outline-none text-sm
                ${errors.password 
                  ? "border-red-400 focus:ring-4 focus:ring-red-100 focus:border-red-500" 
                  : "border-slate-200 focus:ring-4 focus:ring-purple-100 focus:border-purple-500 focus:bg-white"
                }`}
              placeholder="••••••••"
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-xs font-medium mt-1 pl-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Forgot Password Link */}
          <div className="text-right">
            <Link 
              to="/forgot-password" 
              className="text-xs font-bold text-purple-600 hover:text-purple-700 transition duration-150 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Core Sign In Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 active:from-indigo-800 active:to-purple-800 text-white font-semibold py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-150 cursor-pointer text-sm tracking-wide mt-2"
          >
            Sign In
          </button>

          {/* Form Footer */}
          <div className="text-center text-sm text-slate-500 pt-4 border-t border-slate-100 mt-5">
            Don't have an account?{" "}
            <Link 
              to="/register" 
              className="text-purple-600 hover:text-purple-700 font-bold transition duration-150 hover:underline ml-1"
            >
              Create free account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;