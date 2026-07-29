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

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar>
        <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" to="/adminpanel" />
        <SidebarItem icon={<BaggageClaim size={20} />} text="Products" to="/adminpanel/products" />
        <SidebarItem icon={<ListOrdered size={20} />} text="Orders" to="/adminpanel/orders" />
        <SidebarItem icon={<User size={20} />} text="Users" to="/adminpanel/users" />
        <SidebarItem icon={<LifeBuoy size={20} />} text="Support" to="/adminpanel/support" />
      </Sidebar>

      <div className="flex-1 p-6 bg-gray-50 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
}