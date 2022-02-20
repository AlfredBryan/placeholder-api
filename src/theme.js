import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "1200px",
  xl: "1441px",
});

const colors = {
  brand: {
    blue: "#3E7EEE",
  },
};

const styles = {
  global: {
    html: {
      fontSize: "62.5%",
      boxSizing: "border-box",
    },
    body: {
      fontSize: "1.4rem",
      fontFamily: "'Karla', sans-serif",
      color: "#333758",
    },
  },
};

const customTheme = extendTheme({ styles, colors, breakpoints });

export default customTheme;
