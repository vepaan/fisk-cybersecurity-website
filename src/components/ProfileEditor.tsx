"use client";

import { useState, useEffect } from "react";

export default function ProfileEditor({ email }: { email: string }) {
  const [profile, setProfile] = useState({ name: "", department: "", interests: "" });

  useEffect(() => {
    const saved = localStorage.getItem("profile_" + email);
    if (saved) setProfile(JSON.parse(saved));
  }, [email]);

  const save = () => {
    localStorage.setItem("profile_" + email, JSON.stringify(profile));
    alert("Profile saved!");
  };

  return (
    <div className="max-w-md mx-auto space-y-4">
      <input
        className="border w-full p-2 rounded"
        placeholder="Full name"
        value={profile.name}
        onChange={e => setProfile({ ...profile, name: e.target.value })}
      />
      <input
        className="border w-full p-2 rounded"
        placeholder="Department"
        value={profile.department}
        onChange={e => setProfile({ ...profile, department: e.target.value })}
      />
      <textarea
        className="border w-full p-2 rounded"
        placeholder="Research interests"
        value={profile.interests}
        onChange={e => setProfile({ ...profile, interests: e.target.value })}
      />
      <button
        onClick={save}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Save Profile
      </button>
    </div>
  );
}
