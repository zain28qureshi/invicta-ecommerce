import UserRow from "./userrow.jsx";

export default function UserTable({ users, deleteUser }) {
  return (
    <div className="bg-white shadow rounded-xl overflow-x-auto">
      <table className="w-full min-w-[500px] text-sm">
        <thead>
          <tr className="text-left text-gray-500 border-b border-gray-100 bg-gray-50">
            <th className="py-3 px-4 font-medium">User</th>
            <th className="py-3 px-4 font-medium">Role</th>
            <th className="py-3 px-4 font-medium">Status</th>
            <th className="py-3 px-4 font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan={4} className="text-center py-8 text-gray-400">
                No users found.
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <UserRow key={user.id} user={user} deleteUser={deleteUser} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}