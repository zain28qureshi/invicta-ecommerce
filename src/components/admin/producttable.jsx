import ProductRow from "./productrow.jsx";

export default function ProductTable({
  products,
  deleteProduct,
  setEditingProduct,
}) {
  return (
    <div className="bg-white shadow rounded-xl overflow-x-auto">
      <table className="w-full min-w-600px text-sm">
        <thead>
          <tr className="text-left text-gray-500 border-b border-gray-100 bg-gray-50">
            <th className="py-3 px-4 font-medium">Name</th>
            <th className="py-3 px-4 font-medium">Category</th>
            <th className="py-3 px-4 font-medium">Price</th>
            <th className="py-3 px-4 font-medium">Stock</th>
            <th className="py-3 px-4 font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center py-8 text-gray-400">
                No products found.
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <ProductRow
                key={product.id}
                product={product}
                deleteProduct={deleteProduct}
                setEditingProduct={setEditingProduct}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}