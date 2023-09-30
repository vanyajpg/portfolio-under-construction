import React from "react";
import { Box, Link, useTheme } from "@mui/material";
import { tokens } from "../theme";

export default function About() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const teal = {
    color: colors.teal[200],
  };

  return (
    <Box id="about" backgroundColor={colors.blue[800]}>
      <section className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1
            style={teal}
            className="text-5xl mb-4 font-semibold text-white hover:scale-110 duration-500 transform"
          >
            Hi, I'm Vanya.
          </h1>
          <p style={teal} className="mb-8 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            quae sit dolore asperiores dicta sunt voluptate eum dolor illo
            repudiandae?
          </p>
          <div className="flex justify-center">
            <Box
              backgroundColor={colors.pink[400]}
              sx={{ borderRadius: "10%" }}
            >
              <a
                href="#contact"
                className="inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-pink-500 rounded text-lg animate-pulse "
              >
                Hire Me!
              </a>
            </Box>
            <Box sx={{ borderRadius: "10%" }}>
              <Link
                backgroundColor={colors.blue[400]}
                color={'#fff'}
                underline="none"
                href="#projects"
                ml={6}
                variant="h5"
                className=" inline-flex border-0 py-3 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              >
                See My Past Work
              </Link>
            </Box>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt=""
            src={`../../assets/user.png`}
          />
        </div>
      </section>
    </Box>
  );
}
