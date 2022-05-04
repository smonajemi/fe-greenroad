import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import { useLocalStorage } from "components/hooks/useLocalStorage";

export const useLogout = () => {
  const navigate = useNavigate();
  const { clearItem } = useLocalStorage();
  const logout = () => {
    navigate("/login");
    clearItem("userId");
  };

  return {
    logout,
  } as const;
};
