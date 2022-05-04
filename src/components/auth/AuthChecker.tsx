import { useLocalStorage } from "components/hooks/useLocalStorage";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
interface Props {
  children: React.ReactNode;
}

const AuthChecker = ({ children }: Props) => {
  const navigate = useNavigate();
  const {getItem} = useLocalStorage()
  useEffect(() => {
    if (!getItem('userId')) {
      navigate("/login");
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <>{children}</>;
};

export default AuthChecker;
