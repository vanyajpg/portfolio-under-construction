import React from "react";
import { TypeAnimation } from "react-type-animation";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const AboutAnimation = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)

  return (
    <TypeAnimation
      sequence={[
        "Hi I'm Vanya,",
        500,
        "Hi I'm Vanya, a Software Engineer ",
        1000,
        "Hi I'm Vanya, an animal lover",
        1000,
        "Hi I'm Vanya, a pottery enthusiast",
        1000,
        "Hi I'm Vanya, a new New Yorker",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{
        fontSize: "2.4em",
        display: "inline-block",
        fontWeight: "bold",
        color: colors.blue[100],
        position: "relative",
        height: "100px",
      }}
      className="pt-8"
      repeat={Infinity}
    />
  );
};

export default AboutAnimation;
