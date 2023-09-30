import { Box, IconButton, Link, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const NavBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box className=" flex justify-between rounded-b p-8">
      <Box className="flex">
        <Link
          href="#about"
          underline="none"
          color={colors.pink[300]}
          variant="h3"
          fontWeight={500}
          className="transform hover:scale-110 duration-500"
        >
          VanyaCodes
        </Link>
      </Box>

      <Box className="flex">
        <Link
          href="#projects"
          underline="none"
          p="8px"
          color={colors.pink[500]}
          variant="h4"
          fontWeight={400}
          className="transform hover:scale-110 duration-500"
        >
          Projects
        </Link>
        <Link
          href="#skills"
          underline="none"
          p="8px"
          color={colors.pink[500]}
          variant="h4"
          fontWeight={400}
          className="transform hover:scale-110 duration-500"
        >
          Skills
        </Link>
        <Link
          href="#contact"
          underline="none"
          p="8px"
          color={colors.pink[500]}
          variant="h4"
          fontWeight={400}
          className="transform hover:scale-110 duration-500"
          mr="32px"
        >
          Contact
        </Link>
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
