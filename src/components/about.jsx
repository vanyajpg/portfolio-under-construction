import React from "react";
import { Box, Link, useTheme } from "@mui/material";
import { tokens } from "../theme";
import AboutAnimation from "./aboutAnimation";

export default function About() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const teal = {
    color: colors.blue[200],
  };

  return (
    <Box id="about" backgroundColor={colors.blue[800]}>
      <div class="absolute top-0 left-0 transform translate-x-2 translate-y-24">
        <div class="bg-gradient-to-br from-teal-100 to-teal-200 lg:w-24 lg:h-24 md:w-16 md:h-16 w-12 h-12 -ml-2 rounded-full absolute opacity-30"></div>
        <div class="bg-gradient-to-br from-purple-100 to-purple-200 lg:w-24 lg:h-24 md:w-16 md:h-16 w-12 h-12 rounded-full absolute lg:ml-10 md:ml-6 lg:mt-10 md:mt-8 mt-4 ml-2 opacity-30"></div>
        <div class="bg-gradient-to-br from-red-100 to-red-200 lg:w-24 lg:h-24 md:w-16 md:h-16  w-12 h-12 rounded-full absolute lg:ml-20 md:ml-12 ml-6 opacity-30"></div>
      </div>{" "}
      <div class="absolute top-3/4 right-80 transform -translate-x-2 translate-y-24">
        <div class="invisible lg:visible bg-gradient-to-br from-teal-100 to-teal-200  w-44 h-44 rounded-full absolute opacity-30 -m-2"></div>
        <div class="invisible lg:visible bg-gradient-to-br from-purple-100 to-purple-200 w-44 h-44 rounded-full absolute ml-16 mt-20 opacity-30"></div>
        <div class="invisible lg:visible bg-gradient-to-br from-red-100 to-red-200 w-44 h-44 rounded-full absolute ml-32 mt-4 opacity-30"></div>
      </div>
      <section className="container mx-auto flex px-2 py-16 md:flex-row flex-col items-center">
        <div className=" relative lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <AboutAnimation />
          <p
            style={teal}
            className="mb-8 text-lg leading-relaxed tracking-wide "
          >
            Vanya Sagam is currently well-versed in JavaScript frameworks and is
            dedicated to continue on her learning journey. Passionate about
            crafting front-end, back-end, or full-stack solutions, she is
            actively seeking opportunities to dedicate her skills and expertise
            to these roles.
          </p>
          <div className="flex justify-center">
            <Box
              backgroundColor={colors.pink[400]}
              sx={{ borderRadius: "10%" }}
              className="animate-pulse shadow-lg hover:shadow-xl"
            >
              <a
                href="#contact"
                className="inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-pink-400 hover:rounded-lg rounded text-lg items-center text-center "
              >
                Hire Me!
              </a>
            </Box>
            <Box sx={{ borderRadius: "10%" }}>
              <Link
                backgroundColor={colors.blue[400]}
                color={"#fff"}
                underline="none"
                href="#projects"
                ml={6}
                variant="h5"
                className=" inline-flex border-0 py-3 px-6 focus:outline-none transform duration-500 hover:bg-gray-700 hover:text-white rounded text-lg shadow-lg hover:shadow-xl text-center"
              >
                See My Past Work
              </Link>
            </Box>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-2/3">
          <img
            className="object-cover object-center rounded-full"
            alt=""
            src={`../../assets/user.png`}
          />
          <div className="flex justify-center space-x-8 mt-2 ">
            <a href="https://www.linkedin.com/in/vanya-sagam/">
              <img
                src={`../../assets/linkedin.png  `}
                alt="css"
                className="image-size-mini transform hover:scale-110 duration-500"
              />
            </a>
            <a href="https://github.com/vanyajpg">
              <img
                src={`../../assets/github.png  `}
                alt="css"
                className="image-size-mini transform hover:scale-110 duration-500"
              />
            </a>
            <a href="mailto: vanyasagam@gmail.com">
              <img
                src={`../../assets/email.png  `}
                alt="css"
                className="image-size-mini transform hover:scale-110 duration-500"
              />
            </a>
          </div>
        </div>
      </section>
    </Box>
  );
}
