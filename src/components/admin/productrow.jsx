export default function ProductRow({ product, deleteProduct, setEditingProduct }) {
  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50">
      <td className="py-3 px-4 font-medium text-gray-800">{product.name}</td>
      <td className="py-3 px-4 text-gray-600">{product.category}</td>
      <td className="py-3 px-4 text-gray-600">${product.price}</td>
      <td className="py-3 px-4 text-gray-600">{product.stock}</td>
      <td className="py-3 px-4 flex gap-3">
        <button
          onClick={() => setEditingProduct(product)}
          className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
        >
          Edit
        </button>
        <button
          onClick={() => deleteProduct(product.id)}
          className="text-red-500 hover:text-red-600 text-sm font-medium"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}