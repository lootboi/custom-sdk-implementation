import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: "#f1f1f2",
        fontFamily: `Source Code Pro, monospace`,
        bg: `url("https://www.theanimedaily.com/wp-content/uploads/2022/05/Skeleton-Knight-In-Another-World-Episode-8-j.jpg")`,
        bgSize: "cover",
        "& .chakra-alert__desc": {
          color: "#1A202C",
        },
      },
    },
  },
  colors: {
    primary: "#222222",
    accent: "#222222",
    error: "#f04f00",
  },
  zIndices: {
    hide: -1,
    auto: "auto",
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
});

export { theme };
