"use client";

import { useEffect, useState } from "react";
import ProfileEditor from "@/components/ProfileEditor";

export default function DashboardPage() {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setEmail(user);
  }, []);

  if (!email)
    return <p className="text-center text-gray-600">Please log in to access your dashboard.</p>;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Welcome, {email}</h2>
      <ProfileEditor email={email} />
    </div>
  );
}
