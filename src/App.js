import React from "react";
import NavBar from "./components/navBar";
import "./App.css";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <NavBar />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
