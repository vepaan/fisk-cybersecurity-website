"use client";

import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import ProfileCard from "@/components/ProfileCard";
import { users } from "@/lib/users";

export default function PeoplePage() {
  const [query, setQuery] = useState("");

  const filtered = users.filter(
    u =>
      u.name.toLowerCase().includes(query.toLowerCase()) ||
      u.department.toLowerCase().includes(query.toLowerCase()) ||
      u.interests.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Faculty & Researchers</h2>
      <SearchBar value={query} onChange={setQuery} />
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {filtered.map(u => (
          <ProfileCard key={u.id} user={u} />
        ))}
      </div>
    </div>
  );
}
