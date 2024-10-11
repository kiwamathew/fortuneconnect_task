import Link from "next/link";
import {
  FaHome,
  FaMoneyBillWave,
  FaBusinessTime,
  FaClipboardList,
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
} from 'react-icons/fa';

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: FaHome,
        label: "Dashboard",
        href: "/dashboard/user",
        visible: ["admin"],
      },
      {
        icon: FaMoneyBillWave,
        label: "Investments",
        href: "/dashboard/investments",
        visible: ["admin"],
      },
      {
        icon: FaBusinessTime,
        label: "My Businesses",
        href: "/list/students",
        visible: ["admin"],
      },
      {
        icon: FaClipboardList,
        label: "Loans",
        href: "/list/parents",
        visible: ["admin"],
      },
    ],
  },
  {
    title: "MORE...",
    items: [
      {
        icon: FaUserCircle,
        label: "Contact",
        href: "/profile",
        visible: ["admin"],
      },
      {
        icon: FaCog,
        label: "Resources",
        href: "/resources",
        visible: ["admin"],
      },
      {
        icon: FaSignOutAlt,
        label: "My Profile",
        href: "/profile",
        visible: ["admin"],
      },
    ],
  },
];

const Menu = () => {
  const userRole = "admin";

  return (
    <div className="mt-4 text-sm">
      {menuItems.map(({ title, items }) => (
        <div className="flex flex-col gap-2" key={title}>
          <span className="hidden lg:block text-dark font-light my-4">
            {title}
          </span>
          {items
            .filter((item) => item.visible.includes(userRole)) 
            .map(({ icon: Icon, label, href }, index) => (
              <Link
                href={href}
                key={label}
                className="flex items-center justify-center lg:justify-start gap-4 text-dark py-2 transition-colors duration-200 hover:bg-gray-200 rounded-lg"
                aria-label={label}
              >
                <div className="flex-shrink-0">
                  <Icon size={20} className="text-dark" />
                </div>
                <span className="hidden lg:block">{label}</span>
              </Link>
            ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
