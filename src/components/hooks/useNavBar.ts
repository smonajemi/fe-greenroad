import { useState, MouseEvent, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useResponsiveness } from "components/hooks/useResponsiveness";
import { BackendUser } from 'types';
import { useLocalStorage } from './useLocalStorage';

export const useNavBar = () => {
    const pages = [''];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    const loggedInSettings = ['Profile', 'Logout']
    const [user, setUser] = useState<BackendUser>()
    const {getItem, clearItem} = useLocalStorage()
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

 

    const {isDevice} = useResponsiveness()
    const navigate = useNavigate();
  
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
      setAnchorElUser(null)
    };
      
    const handleProfileOption = (src: any) => {
      switch (src) {
        case 'dashboard':  
        navigate('/dashboard')
        break;
        case 'Logout':
          clearItem('user')
          navigate('/')
        break;
      }
    };
    const handleAuthentication = (src: any) => {
      switch (src) {
        case 'Sign Up':
          navigate('/signUp')
          window.location.reload()
        break;
        case 'Sign In':
          navigate('/signIn')
          window.location.reload()
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
        handleAuthentication,
        pages,
        settings,
        loggedInSettings,
        user,
    } as const
}
