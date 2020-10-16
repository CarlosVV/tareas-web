// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import TaskPage from "views/Tasks/Task.js";
import Person from "@material-ui/icons/Person";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/task",
    name: "Tarea",
    icon: Person,
    component: TaskPage,
    layout: "/admin"
  }
];

export default dashboardRoutes;
