import { Typography, Box } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box
      component="span"
      sx={{
        p: 2,
        textAlign: "center",
        borderTop: "1px solid #d6d6d6",
        color: "#787878",
      }}
    >
      <Typography>
        Copyright © {new Date().getFullYear()}. All rights reserved.
      </Typography>
    </Box>
  );
}
