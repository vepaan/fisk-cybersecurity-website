import { User } from "@/types/user";

export default function ProfileCard({ user }: { user: User }) {
  return (
    <div className="border p-4 rounded-lg shadow-sm bg-white hover:shadow-md transition">
      <h3 className="text-lg font-semibold">{user.name}</h3>
      <p className="text-sm text-gray-600">{user.department}</p>
      <p className="text-gray-700 mt-2">{user.interests}</p>
    </div>
  );
}
