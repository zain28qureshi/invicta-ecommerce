import { useState } from "react";

import OrderTable from "../../components/admin/orderstable.jsx";
import StatsCard from "../../components/admin/statscard.jsx";

import adminOrders from "../../data/adminorders.js";

export default function Orders() {
  const [orders, setOrders] = useState(adminOrders);

  function updateStatus(id, newStatus) {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  }

  function deleteOrder(id) {
    setOrders(orders.filter((order) => order.id !== id));
  }

  return (
    <div className="space-y-6">
      <StatsCard title="Total Orders" value={orders.length} />

      <OrderTable
        orders={orders}
        updateStatus={updateStatus}
        deleteOrder={deleteOrder}
      />
    </div>
  );
}