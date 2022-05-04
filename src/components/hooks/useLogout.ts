import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import { useLocalStorage } from "components/hooks/useLocalStorage";

export const useLogout = () => {
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const { clearItem } = useLocalStorage();
  const logout = () => {
    setDisabled(true);
    signOut(auth)
      .then(() => {
        navigate("/login");
        clearItem("userId");
      })
      .catch((error) => {
        console.error(error);
        setDisabled(false);
      });
  };

  return {
    logout,
  } as const;
};
