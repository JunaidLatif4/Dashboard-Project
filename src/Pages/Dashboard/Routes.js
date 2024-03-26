import React from "react";

// Pages :
import DashboardHome from "./Screens/Home/Index";
import Customers from "./Screens/Customers/Index";
import Sellers from "./Screens/Sellers/Index";

// Icons :
import { MdDashboard } from "react-icons/md";
import { FaHospitalUser, FaCircleDollarToSlot } from "react-icons/fa6";






let Routes = [
    { label: "Dashboard", path: "/", icon: MdDashboard, element: DashboardHome },
    { label: "Sellers", path: "/sellers", icon: FaHospitalUser, element: Sellers },
    { label: "Customers", path: "/customers", icon: FaCircleDollarToSlot, element: Customers },
];


export default Routes;