import { Stack, Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./header/Header";

export default function MainLayout() {
  return (
    <Stack>
      <Header />
      <Outlet />
      <Box sx={{ flexGrow: 1 }} />
      <Footer />
    </Stack>
  );
}
