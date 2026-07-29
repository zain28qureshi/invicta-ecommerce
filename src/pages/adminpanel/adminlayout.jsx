import { Outlet } from "react-router-dom";
import Sidebar from "../../components/admin/sidebar.jsx";
import SidebarItem from "../../components/admin/sidebaritem.jsx";

import {
  BaggageClaim,
  LayoutDashboard,
  LifeBuoy,
  ListOrdered,
  User,
} from "lucide-react";

export default function AdminLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar>
        <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" to="/adminpanel" />
        <SidebarItem icon={<BaggageClaim size={20} />} text="Products" to="/adminpanel/products" />
        <SidebarItem icon={<ListOrdered size={20} />} text="Orders" to="/adminpanel/orders" />
        <SidebarItem icon={<User size={20} />} text="Users" to="/adminpanel/users" />
        <SidebarItem icon={<LifeBuoy size={20} />} text="Support" to="/adminpanel/support" />
      </Sidebar>

      <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}