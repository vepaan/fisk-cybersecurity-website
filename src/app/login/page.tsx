"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    localStorage.setItem("user", email);
    router.push("/dashboard");
  };

  return (
    <div className="max-w-md mx-auto text-center">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <input
        className="border w-full p-2 rounded mb-4"
        placeholder="Enter your university email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Login
      </button>
    </div>
  );
}
