import { useState } from "react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-87.5 bg-white p-6 rounded-xl shadow-lg">

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center mb-4">
          {isLogin ? "Login" : "Signup"}
        </h2>

        {/* Form */}
        <form className="flex flex-col gap-3">
          {!isLogin && (
            <input
              type="text"
              placeholder="Name"
              className="border p-2 rounded"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded"
          />

          <button className="bg-blue-500 text-white p-2 rounded">
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        {/* Toggle */}
        <p className="text-sm text-center mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 ml-1"
          >
            {isLogin ? "Signup" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}