import { ChipIcon } from "@heroicons/react/solid";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import React from "react";

export default function Skills() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const pink = {
    color: colors.pink[200],
  };

  const teal ={
    backgroundColor: colors.blue[600]
  }
  return (
    <Box id="skills" backgroundColor={colors.blue[700]}>
      <div class="absolute bottom-100 left-0 transform translate-x-2 translate-y-8">
        <div class="bg-gradient-to-br from-teal-100 to-teal-200  w-64 h-64 rounded-full absolute opacity-30 -m-4"></div>
        <div class="bg-gradient-to-br from-purple-100 to-purple-200 w-64 h-64 rounded-full absolute ml-16 mt-32 opacity-30"></div>
        <div class="bg-gradient-to-br from-red-100 to-red-200 w-64 h-64 rounded-full absolute ml-44 -mt-4 opacity-30"></div>
      </div>{" "}
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-12">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="text-5xl font-semibold title-font" style={pink}>
            Tools & Technologies
          </h1>
        </div>
        <div
          style={teal}
          className=" relative opacity-100 lg:ml-32 lg:mr-32 lg:mb-12 lg:py-12 py-8 grid grid-cols-7 grid-rows-2 lg:gap-8 gap-4 rounded-3xl pt-6 shadow-lg hover:shadow-2xl duration-500 "
        >
          <div className="col-start-2 transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/html.png  `}
              alt="html"
              className="image-size "
            />
            <p className="flex text-md tracking-wide mt-2 text-[#acb4bb] invisible lg:visible">
              html
            </p>
          </div>
          <div className="col-start-3 transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/css.png  `}
              alt="css"
              className="image-size"
            />
            <p className="flex text-md tracking-wide mt-2 text-[#acb4bb] invisible lg:visible">
              css
            </p>
          </div>
          <div className="col-start-4 transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/tailwind.png  `}
              alt="tailwind"
              className="image-size"
            />
            <p className="flex text-md tracking-wide mt-2 text-[#acb4bb] invisible lg:visible">
              tailwind css
            </p>
          </div>
          <div className="col-start-5 transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/javascript.png  `}
              alt="javascript"
              className="image-size"
            />
            <p className="flex text-md tracking-wide mt-2 text-[#acb4bb] invisible lg:visible">
              javascript
            </p>
          </div>
          <div className="col-start-6 transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/material.png  `}
              alt="material"
              className="image-size"
            />
            <p className="flex text-md tracking-wide mt-2 text-[#acb4bb] invisible lg:visible">
              material ui
            </p>
          </div>
          <div className="col-start-2 transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/react.png  `}
              alt="material"
              className="image-size"
            />
            <p className="flex text-md tracking-wide mt-2 text-[#acb4bb] invisible lg:visible">
              react
            </p>
          </div>
          <div className="col-start-3 transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/node.png  `}
              alt="node"
              className="image-size"
            />
            <p className="flex text-md tracking-wide mt-2 text-[#acb4bb] invisible lg:visible">
              node
            </p>
          </div>
          <div className="col-start-4 transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/mongodb.png  `}
              alt="mongodb"
              className="image-size"
            />
            <p className="flex text-md tracking-wide mt-2 text-[#acb4bb] invisible lg:visible">
              mongodb
            </p>
          </div>
          <div className="col-start-5 transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/dbeaver.png  `}
              alt="dbeaver"
              className="image-size"
            />
            <p className="flex text-md tracking-wide mt-2 text-[#acb4bb] invisible lg:visible">
              dbeaver
            </p>
          </div>
          <div className="col-start-6 transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/aws.png  `}
              alt="aws"
              className="image-size-aws"
            />
            <p className="flex text-md tracking-wide mt-2 text-[#acb4bb] invisible lg:visible">
              aws
            </p>
          </div>
          <div className="col-start-2 transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/figma.png  `}
              alt="figma"
              className="image-size"
            />
            <p className="flex text-md tracking-wide mt-2 text-[#acb4bb] invisible lg:visible">
              figma
            </p>
          </div>
          <div className="col-start-3 transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/git.png  `}
              alt="git"
              className="image-size"
            />
            <p className="flex text-md tracking-wide mt-2 text-[#acb4bb] invisible lg:visible">
              git
            </p>
          </div>
          <div className="col-start-4 transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/jira.png  `}
              alt="jira"
              className="image-size"
            />
            <p className="flex text-md tracking-wide mt-2 text-[#acb4bb] invisible lg:visible">
              jira
            </p>
          </div>
          <div className="col-start-5 transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/express.png  `}
              alt="express"
              className="image-size flex justify-center items-center"
            />
            <p className="flex text-md tracking-wide mt-2 text-[#acb4bb] invisible lg:visible">
              express
            </p>
          </div>{" "}
          <div className="col-start-6 transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/postman.png  `}
              alt="express"
              className="image-size flex justify-center items-center"
            />
            <p className="flex text-md tracking-wide mt-2 text-[#acb4bb] invisible lg:visible">
              postman
            </p>
          </div>
        </div>
      </div>
    </Box>
  );
}
