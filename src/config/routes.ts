import ErrorPage from "screens/ErrorPage";
import Account from "screens/Member-Profile/Account";
import { Dashboard } from "screens/Member-Profile/Dashboard";
import Home from "../screens/Home";
import Login from "../screens/Login";

interface RouteType {
  path: string;
  component: any;
  name: string;
  protected: boolean;
}

const routes: RouteType[] = [
  {
    path: "*",
    component: ErrorPage,
    name: "Error",
    protected: false,
  },
  {
    path: "/",
    component: Home,
    name: "Home",
    protected: true,
  },
  {
    path: "/login",
    component: Login,
    name: "Login",
    protected: false,
  },
  {
    path: "/account",
    component: Account,
    name: "Account",
    protected: true,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    name: "Dashboard",
    protected: true,
  },
];

export default routes;
