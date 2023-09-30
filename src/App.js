import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./components/navBar";
import "./App.css";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <NavBar />
          <About/>
          <Projects/>
          <Skills/>
          <Contact/>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
