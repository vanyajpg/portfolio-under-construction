import React from "react";
import { CodeIcon } from "@heroicons/react/solid";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

export default function Projects() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const pink = {
    color: colors.pink[200],
  };
  return (
    <Box
      id="projects"
      className="text-gray-400 pb-16 body-font"
      backgroundColor={colors.blue[700]}
    >
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1
            className="sm:text-4xl text-3xl font-semibold  title-font mb-4 text-white"
            style={pink}
          >
            Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-xl" style={pink}>
            A constantly developing developer.
          </p>
        </div>
        {/* GRID */}

        <div className="flex flex-wrap -m-4">
          <a
            href="https://github.com/vanyajpg/MilesTo"
            className="sm:w-1/2 w-100 p-4"
          >
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={`../../assets/milesTo.gif`}
                style={{ height: "300px" }}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  HTML, TailwindCSS, Embedded JavaScript, MongoDB, Node.js,
                  Express, React
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  MilesTo
                </h1>
                <p className="leading-relaxed">
                  As someone who is now living in NYC, I thought it would be
                  extremely fascinating to be able to tally up all the miles I
                  have ever walked in the last few months. Unfortunately, I was
                  not able to find any existing application that had this
                  functionality. This is how the idea for
                  <strong>MilesTo</strong> was created! MilesTo is a MERN
                  application encouraging you to reach your daily step goals.
                </p>
              </div>
            </div>
          </a>


          
          <a href="https://tattvajijnasa.com/" className="sm:w-1/2 w-100 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={`../../assets/tattva.png`}
                style={{ height: "300px" }}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  HTML, CSS, JAVASCRIPT, SCSS
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  TATTVA-JIJÑĀSĀ
                </h1>
                <p className="leading-relaxed">
                  Here is a probono website I created for a NYC-based nonprofit
                  organization. <br />
                  <strong>
                    <a href="https://tattvajijnasa.com" />
                    https://tattvajijnasa.com
                  </strong>
                  is a minimalistic website providing commentaries on various
                  ancient Sanskrit texts by different teachers in one place. The
                  author of this website is still working on more Sanskrit texts
                  to publish to the public and they will be added gradually.
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://adminthat.netlify.app/"
            className="sm:w-1/2 w-100 p-4"
          >
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={`../../assets/adminthat.png`}
                style={{ height: "300px" }}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  React.js React Pro Sidebar, MaterialUI, MaterialUI DataGrid,
                  FullCalendar, Formik, Yup, & Nivo
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  Admin That
                </h1>
                <p className="leading-relaxed">
                  <strong>Admin That</strong> is a powerful app with a sleek and
                  intuitive admin dashboard. Effortlessly manage your
                  administrative tasks, access real-time data, and make informed
                  decisions with ease. From user management to data
                  visualization, our intuitive interface empowers you to
                  efficiently oversee and optimize your operations.
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://throughspace.netlify.app/"
            className="sm:w-1/2 w-100 p-4"
          >
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-5/6 object-cover object-center"
                src={`../../assets/throughspace.png`}
                style={{ height: "300px" }}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  React.js, TailwindCSS, Node.js, HTML5/CSS3, Javascript ES6
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  Through Space
                </h1>
                <p className="leading-relaxed">
                  Ever since I was a child, I have loved observing and tracking
                  celestial events in outer space. One of my earliest birthday
                  gifts was a pair of binoculars, which allowed me to appreciate
                  the planets in the night sky. Creating
                  <strong>Through Space</strong> became a meaningful way for me
                  to not only share my passion with others but also to expand my
                  knowledge of celestial phenomena.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </Box>
  );
}
