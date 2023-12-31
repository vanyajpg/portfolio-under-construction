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
    <Box className="flex justify-between items-center rounded-b pt-4 pr-4 pl-4 pb-2 ">
      <Box className="flex transform hover:scale-110 duration-500 pl-1">
        <Link
          href="#about"
          underline="none"
          color={colors.pink[300]}
          variant="h3"
          fontWeight={600}
          className=" uppercase"
        >
          Vanya
        </Link>
        <Link
          href="#about"
          underline="none"
          color={colors.maroon[300]}
          variant="h3"
          fontWeight={500}
          className=" uppercase pl-1"
        >
          SAGAM{" "}
        </Link>{" "}
      </Box>

      <Box className="flex justify-center items-center">
        <Link
          href="#work"
          underline="none"
          p="0px 5px 0px 0px"
          color={colors.pink[500]}
          variant="h4"
          fontWeight={700}
          className="hidden md:inline-block transform hover:scale-110 duration-500"
        >
          Projects
        </Link>
        <Link
          href="#skills"
          underline="none"
          p="16px"
          color={colors.pink[500]}
          variant="h4"
          fontWeight={700}
          className=" hidden md:inline-block transform hover:scale-110 duration-500"
        >
          Skills
        </Link>
        <Link
          href="#contact"
          underline="none"
          p="16px"
          color={colors.pink[500]}
          variant="h4"
          fontWeight={700}
          className=" hidden md:inline-block transform hover:scale-110 duration-500 "
          mr="24px"
        >
          Contact
        </Link>
        <Box sx={{ mr: "4px" }}>
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default NavBar;
