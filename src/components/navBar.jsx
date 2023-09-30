import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const NavBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      backgroundColor={colors.blue[400]}
      className=" flex justify-between rounded-b p-8"
    >
      <Box>
        <Typography color={colors.pink[500]} variant="h2" fontWeight={500}>
          Vanya Sagam
        </Typography>
      </Box>
      <Box className="flex justify-center items-center space-x-24 border-2 border-red-500 ">
        <Typography>Projects</Typography>
        <Typography>Skills</Typography>
        <Typography>Contact Me</Typography>
      </Box>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export default NavBar;
