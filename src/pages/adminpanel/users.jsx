import { useState } from "react";

import UserTable from "../../components/admin/usertable.jsx";
import StatsCard from "../../components/admin/statscard.jsx";

import adminUsers from "../../data/adminusers.js";

export default function Users() {
  const [users, setUsers] = useState(adminUsers);
  const [search, setSearch] = useState("");

  function deleteUser(id) {
    setUsers(users.filter((user) => user.id !== id));
  }

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <StatsCard title="Total Users" value={users.length} />
      </div>

      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded-lg px-3 py-2 w-full max-w-xs"
      />

      <UserTable users={filteredUsers} deleteUser={deleteUser} />
    </div>
  );
}