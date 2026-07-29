import StatusBadge from "./statusbadge.jsx";

export default function UserRow({ user, deleteUser }) {
  const initial = user.name.charAt(0).toUpperCase();

  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50">
      <td className="py-3 px-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gray-800 text-white flex items-center justify-center text-sm font-semibold">
            {initial}
          </div>
          <div>
            <p className="font-medium text-gray-800">{user.name}</p>
            <p className="text-xs text-gray-500">{user.email}</p>
          </div>
        </div>
      </td>
      <td className="py-3 px-4 text-gray-600">{user.role}</td>
      <td className="py-3 px-4">
        <StatusBadge status={user.status} />
      </td>
      <td className="py-3 px-4">
        <button
          onClick={() => deleteUser(user.id)}
          className="text-red-500 hover:text-red-600 text-sm font-medium"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}