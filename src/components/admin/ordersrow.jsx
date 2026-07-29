export default function OrderRow({ order, updateStatus, deleteOrder }) {
  return (
    <tr>
      <td>{order.customer}</td>
      <td>{order.product}</td>
      <td>${order.total}</td>
      <td>
        <select
          value={order.status}
          onChange={(e) => updateStatus(order.id, e.target.value)}
        >
          <option value="Pending">Pending</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </td>
      <td>
        <button onClick={() => deleteOrder(order.id)}>Delete</button>
      </td>
    </tr>
  );
}