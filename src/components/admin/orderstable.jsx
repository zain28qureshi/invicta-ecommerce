import OrderRow from "./ordersrow";

export default function OrderTable({ orders, updateStatus, deleteOrder }) {
  return (
    <div className="overflow-x-auto bg-white shadow rounded-xl">
      <table className="w-full min-w-600px text-sm">
        <thead>
          <tr className="text-left text-gray-500 border-b border-gray-100 bg-gray-50">
            <th className="py-3 px-4 font-medium">Customer</th>
            <th className="py-3 px-4 font-medium">Product</th>
            <th className="py-3 px-4 font-medium">Total</th>
            <th className="py-3 px-4 font-medium">Status</th>
            <th className="py-3 px-4 font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center py-8 text-gray-400">
                No orders found.
              </td>
            </tr>
          ) : (
            orders.map((order) => (
              <OrderRow
                key={order.id}
                order={order}
                updateStatus={updateStatus}
                deleteOrder={deleteOrder}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}