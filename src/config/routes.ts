import Account from "screens/Account";
import Settings from "screens/Settings";
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
    protected: true,
  },
  {
    path: "/settings",
    component: Settings,
    name: "Setting Screen",
    protected: true,
  },
];

export default routes;
