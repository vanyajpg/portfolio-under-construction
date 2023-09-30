import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import React from "react";

export default function Skills() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const pink = {
    color: colors.pink[200],
  };
    const lightblue = {
      color: colors.blue[200],
    };
  const teal ={
    backgroundColor: colors.blue[600]
  }
  return (
    <Box id="skills" backgroundColor={colors.blue[700]}>
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1
            className="sm:text-4xl text-3xl font-semibold title-font text-white mb-4"
            style={pink}
          >
            Tools & Technologies
          </h1>
          {/* <p
            className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"
            style={pink}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p> */}
        </div>
        <div
          style={teal}
          className=" ml-32 mr-32 mb-32 py-12 grid grid-cols-7 grid-rows-2 gap-8 rounded-3xl pt-6 shadow-lg hover:shadow-2xl duration-500 "
        >
          <div className="col-start-2 transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/html.png  `}
              alt="html"
              className="image-size "
            />
            <p className="flex text-md tracking-wide mt-2 text-[#acb4bb]">
              html
            </p>
          </div>
          <div className="col-start-3 transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/css.png  `}
              alt="css"
              className="image-size"
            />
            <p className="flex text-md tracking-wide mt-2  text-[#acb4bb]">
              css
            </p>
          </div>
          <div className="col-start-4 transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/tailwind.png  `}
              alt="tailwind"
              className="image-size"
            />
            <p className="flex text-md tracking-wide mt-2  text-[#acb4bb]">
              tailwind css
            </p>
          </div>
          <div className="col-start-5 transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/javascript.png  `}
              alt="javascript"
              className="image-size"
            />
            <p className="flex text-md tracking-wide mt-2  text-[#acb4bb]">
              javascript
            </p>
          </div>
          <div className="col-start-6 transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/material.png  `}
              alt="material"
              className="image-size"
            />
            <p className="flex text-md tracking-wide mt-2  text-[#acb4bb]">
              material ui
            </p>
          </div>
          <div className="col-start-2 transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/react.png  `}
              alt="material"
              className="image-size"
            />
            <p className="flex text-md tracking-wide mt-2  text-[#acb4bb]">
              react
            </p>
          </div>
          <div className="col-start-3 transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/node.png  `}
              alt="node"
              className="image-size"
            />
            <p className="flex text-md tracking-wide mt-2  text-[#acb4bb]">
              node
            </p>
          </div>
          <div className="col-start-4 transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/mongodb.png  `}
              alt="mongodb"
              className="image-size"
            />
            <p className="flex text-md tracking-wide mt-2  text-[#acb4bb]">
              mongodb
            </p>
          </div>
          <div className="col-start-5 transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/dbeaver.png  `}
              alt="dbeaver"
              className="image-size"
            />
            <p className="flex text-md tracking-wide mt-2  text-[#acb4bb]">
              dbeaver
            </p>
          </div>
          <div className="col-start-6 transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/aws.png  `}
              alt="aws"
              className="image-size-aws"
            />
            <p className="flex text-md tracking-wide tranparent mt-2  text-[#acb4bb]">
              aws
            </p>
          </div>
          <div className="col-start-2 transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/figma.png  `}
              alt="figma"
              className="image-size"
            />
            <p className="flex text-md tracking-wide mt-2  text-[#acb4bb]">
              figma
            </p>
          </div>
          <div className="col-start-3 transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/git.png  `}
              alt="git"
              className="image-size"
            />
            <p className="flex text-md tracking-wide mt-2  text-[#acb4bb]">
              git
            </p>
          </div>
          <div className="col-start-4 transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/jira.png  `}
              alt="jira"
              className="image-size"
            />
            <p className="flex text-md tracking-wide mt-2  text-[#acb4bb]">
              jira
            </p>
          </div>
          <div className="col-start-5 transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/express.png  `}
              alt="express"
              className="image-size flex justify-center items-center"
            />
            <p className="flex text-md tracking-wide mt-2  text-[#acb4bb]">
              express
            </p>
          </div>{" "}
          <div className="col-start-6 transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/postman.png  `}
              alt="express"
              className="image-size flex justify-center items-center"
            />
            <p className="flex text-md tracking-wide mt-2  text-[#acb4bb]">
              postman
            </p>
          </div>
        </div>
      </div>
    </Box>
  );
}
