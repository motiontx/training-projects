import { Global } from "@emotion/react";

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: "Lobster Bold";
        src: url("./fonts/lobstertwo-bold-webfont.woff2") format("woff2"),
          url("./fonts/lobstertwo-bold-webfont.woff") format("woff");
        font-weight: normal;
        font-style: normal;
      }
      `}
  />
);
