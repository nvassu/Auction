import React from "react";
import "./App.css";
import Router from "./routes";
import ThemeProvider from "./theme";
import GlobalStyles from "./theme/globalStyles";

function App() {
  return (
    <ThemeProvider>
    <GlobalStyles/>
      <Router />
    </ThemeProvider>
  );
}

export default App;
