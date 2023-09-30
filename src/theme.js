import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        blue: {
          100: "#d5dadd",
          200: "#acb4bb",
          300: "#828f98",
          400: "#596976",
          500: "#2f4454",
          600: "#263643",
          700: "#1F2833",
          800: "#131b22",
          900: "#090e11",
        },
        maroon: {
          100: "#d5d0d1",
          200: "#aba1a4",
          300: "#827376",
          400: "#584449",
          500: "#2e151b",
          600: "#251116",
          700: "#1c0d10",
          800: "#12080b",
          900: "#090405",
        },
        pink: {
          100: "#f8e5e9",
          200: "#f0cad4",
          300: "#e9b0be",
          400: "#e195a9",
          500: "#da7b93",
          600: "#ae6276",
          700: "#834a58",
          800: "#57313b",
          900: "#2c191d",
        },
        teal: {
          100: "#d7e2e2",
          200: "#afc5c5",
          300: "#87a8a9",
          400: "#5f8b8c",
          500: "#376e6f",
          600: "#2c5859",
          700: "#214243",
          800: "#162c2c",
          900: "#0b1616",
        },
        green: {
          100: "#d2d6d6",
          200: "#a4adae",
          300: "#778585",
          400: "#495c5d",
          500: "#1c3334",
          600: "#16292a",
          700: "#111f1f",
          800: "#0b1415",
          900: "#060a0a",
        },
      }
    : {
        blue: {
          100: "#090e11",
          200: "#131b22",
          300: "#1F2833",
          400: "#263643",
          500: "#2f4454",
          600: "#596976",
          700: "#828f98",
          800: "#acb4bb",
          900: "#d5dadd",
        },
        maroon: {
          100: "#090405",
          200: "#12080b",
          300: "#1c0d10",
          400: "#251116",
          500: "#2e151b",
          600: "#584449",
          700: "#827376",
          800: "#aba1a4",
          900: "#d5d0d1",
        },
        pink: {
          100: "#2c191d",
          200: "#57313b",
          300: "#834a58",
          400: "#ae6276",
          500: "#da7b93",
          600: "#e195a9",
          700: "#e9b0be",
          800: "#f0cad4",
          900: "#f8e5e9",
        },
        teal: {
          100: "#0b1616",
          200: "#162c2c",
          300: "#214243",
          400: "#2c5859",
          500: "#376e6f",
          600: "#5f8b8c",
          700: "#87a8a9",
          800: "#afc5c5",
          900: "#d7e2e2",
        },
        green: {
          100: "#060a0a",
          200: "#0b1415",
          300: "#111f1f",
          400: "#16292a",
          500: "#1c3334",
          600: "#495c5d",
          700: "#778585",
          800: "#a4adae",
          900: "#d2d6d6",
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            pink: {
              main: colors.pink[500],
            },
            teal: {
              main: colors.teal[500],
            },
            blue: {
              dark: colors.blue[700],
              main: colors.blue[500],
              light: colors.blue[100],
            },
            background: {
              default: "#1F2833",
            },
          }
        : {
            // palette values for light mode
            pink: {
              main: colors.pink[100],
            },
            teal: {
              main: colors.teal[500],
            },
            blue: {
              dark: colors.blue[700],
              main: colors.blue[500],
              light: colors.blue[100],
            },
            background: {
              default: "#ebedee",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
