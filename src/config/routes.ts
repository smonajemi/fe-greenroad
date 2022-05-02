import Account from "screens/Member-Profile/Account";
import { Dashboard } from "screens/Member-Profile/Dashboard";
import Settings from "screens/Member-Profile/Settings";
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
    path: "",
    component: Home,
    name: "Home Screen",
    protected: true,
  },
  {
    path: "/login",
    component: Login,
    name: "Login Screen",
    protected: false,
  },
  {
    path: "/account",
    component: Account,
    name: "Account Screen",
    protected: false,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    name: "Dashboard Screen",
    protected: false,
  },
];

export default routes;
