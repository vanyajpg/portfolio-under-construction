import { Box, useTheme } from "@mui/system";
import React from "react";
import { tokens } from "../theme";

export default function Contact() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const pink = {
    color: colors.pink[200],
  };
  return (
    <Box id="contact" backgroundColor={colors.blue[700]}>
      <div className="container py-12 mx-auto text-center ">
        <div className="flex flex-col w-full mb-20">
          <h1
            className="text-5xl font-semibold  title-font mb-4"
            style={pink}
          >
           Get in Touch!
          </h1>
          <div className="flex justify-center space-x-8">
            <a href="https://www.linkedin.com/in/vanya-sagam/">
              <img
                src={`../../assets/linkedin.png  `}
                alt="css"
                className="image-size-contact transform hover:scale-110 duration-500"
              />
            </a>
            <a href="https://github.com/vanyajpg">
              <img
                src={`../../assets/github.png  `}
                alt="css"
                className="image-size-contact transform hover:scale-110 duration-500"
              />
            </a>
            <a href="mailto: vanyasagam@gmail.com">
              <img
                src={`../../assets/email.png  `}
                alt="css"
                className="image-size-contact transform hover:scale-110 duration-500"
              />
            </a>
          </div>
        </div>
      </div>{" "}
    </Box>
  );
}
