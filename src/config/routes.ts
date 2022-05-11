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
    name: "Landing Page",
    protected: false,
  },
  {
    path: "*",
    component: ErrorPage,
    name: "Error Page",
    protected: false,
  },
  {
    path: "/",
    component: Home,
    name: "Home Page",
    protected: true,
  },
  {
    path: "/login",
    component: Login,
    name: "Auth Page",
    protected: false,
  },
  {
    path: "/account",
    component: Account,
    name: "Account",
    protected: true,
  },
  {
    path: "/profile",
    component: Dashboard,
    name: "Member Profile",
    protected: true,
  },
];

export default routes;
