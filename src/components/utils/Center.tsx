import { Box } from "@mui/material";
import React from "react";

interface Props {
  children: React.ReactNode;
  height?: number | string;
  width?: number | string;
}

const Center = ({ children, height = 100, width = 100 }: Props) => {
  let useHeight, useWidth;
  if (typeof height === "string") useHeight = height;
  else useHeight = height + "vh";
  if (typeof width === "string") useWidth = width;
  else useWidth = width + "vw";

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: useHeight,
        // width: useWidth,
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {children}
    </Box>
  );
};

export default Center;
