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
        <div class="invisible lg:visible bg-gradient-to-br from-teal-100 to-teal-200  w-56 h-56 rounded-full absolute opacity-20 -m-4 animate-pulse"></div>
        <div class="invisible lg:visible bg-gradient-to-br from-purple-100 to-purple-200 w-56 h-56 rounded-full absolute ml-16 mt-32 opacity-20 animate-pulse"></div>
        <div class="invisible lg:visible bg-gradient-to-br from-red-100 to-red-200 w-56 h-56 rounded-full absolute ml-44 -mt-4 opacity-20 animate-pulse"></div>
      </div>{" "}
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-12">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1
            className=" relative text-5xl font-semibold title-font"
            style={pink}
          >
            Tools & Technologies
          </h1>
        </div>
        <div
          style={teal}
          className=" relative opacity-100 lg:py-12  flex justify-center flex-wrap gap-x-16 gap-y-8 items-center rounded-3xl pt-6 shadow-lg hover:shadow-2xl duration-500 capitalize "
        >
          <div className=" transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/html.png  `}
              alt="html"
              className="image-size "
            />
            <p className="flex text-md tracking-wide mt-2 text-[#acb4bb] invisible lg:visible uppercase">
              html
            </p>
          </div>
          <div className="transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/css.png  `}
              alt="css"
              className="image-size"
            />
            <p className="flex text-md tracking-wide mt-2 text-[#acb4bb] invisible lg:visible uppercase">
              css
            </p>
          </div>
          <div className="transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/tailwind.png  `}
              alt="tailwind"
              className="image-size"
            />
            <p className="flex text-md tracking-wide mt-2 text-[#acb4bb] invisible lg:visible">
              tailwind CSS
            </p>
          </div>
          <div className="transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/javascript.png  `}
              alt="javascript"
              className="image-size"
            />
            <p className="flex text-md tracking-wide mt-2 text-[#acb4bb] invisible lg:visible">
              javascript
            </p>
          </div>
          <div className="transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/material.png  `}
              alt="material"
              className="image-size"
            />
            <p className="flex text-md tracking-wide mt-2 text-[#acb4bb] invisible lg:visible">
              material UI
            </p>
          </div>
          <div className="transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/react.png  `}
              alt="material"
              className="image-size"
            />
            <p className="flex text-md tracking-wide mt-2 text-[#acb4bb] invisible lg:visible">
              react
            </p>
          </div>
          <div className="transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/node.png  `}
              alt="node"
              className="image-size"
            />
            <p className="flex text-md tracking-wide mt-2 text-[#acb4bb] invisible lg:visible">
              node
            </p>
          </div>
          <div className="transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/mongodb.png  `}
              alt="mongodb"
              className="image-size"
            />
            <p className="flex text-md tracking-wide mt-2 text-[#acb4bb] invisible lg:visible">
              mongoDB
            </p>
          </div>
          <div className="transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/dbeaver.png  `}
              alt="dbeaver"
              className="image-size"
            />
            <p className="flex text-md tracking-wide mt-2 text-[#acb4bb] invisible lg:visible">
              dBeaver
            </p>
          </div>
          <div className="transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/aws.png  `}
              alt="aws"
              className="image-size-aws"
            />
            <p className="flex text-md tracking-wide mt-2 text-[#acb4bb] invisible lg:visible">
              AWS
            </p>
          </div>
          <div className="transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/figma.png  `}
              alt="figma"
              className="image-size"
            />
            <p className="flex text-md tracking-wide mt-2 text-[#acb4bb] invisible lg:visible">
              figma
            </p>
          </div>
          <div className="transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/git.png  `}
              alt="git"
              className="image-size"
            />
            <p className="flex text-md tracking-wide mt-2 text-[#acb4bb] invisible lg:visible">
              git
            </p>
          </div>
          <div className="transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/jira.png  `}
              alt="jira"
              className="image-size"
            />
            <p className="flex text-md tracking-wide mt-2 text-[#acb4bb] invisible lg:visible">
              jira
            </p>
          </div>
          <div className="transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
            <img
              src={`../../assets/express.png  `}
              alt="express"
              className="image-size flex justify-center items-center"
            />
            <p className="flex text-md tracking-wide mt-2 text-[#acb4bb] invisible lg:visible">
              express
            </p>
          </div>{" "}
          <div className="transform duration-500 hover:scale-125 flex flex-col items-center font-bold">
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
