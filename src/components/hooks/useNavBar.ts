import { useState, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useResponsiveness } from "components/hooks/useResponsiveness";
import { useLogout } from "./useLogout";

export const useNavBar = () => {
  const { logout } = useLogout();
  const { isDevice } = useResponsiveness();
  const navigate = useNavigate();
  const pages = [""];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const loggedInSettings = ["Profile", "Logout"];
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleProfileOption = (src: any) => {
    switch (src) {
      case "Dashboard":
        navigate("/dashboard");
        break;
      case "Account":
        navigate("/account");
        break;
      case "Logout":
        logout();
        break;
    }
  };

  return {
    anchorElNav,
    setAnchorElNav,
    anchorElUser,
    setAnchorElUser,
    isDevice,
    navigate,
    handleOpenNavMenu,
    handleOpenUserMenu,
    handleCloseNavMenu,
    handleCloseUserMenu,
    handleProfileOption,
    pages,
    settings,
    loggedInSettings,
  } as const;
};
