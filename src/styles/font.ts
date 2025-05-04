//file này để export font thôi
import localFont from "next/font/local";

export const headingBlogFont = localFont({
  src: [
    {
      path: "../../public/fonts/CheltenhamStdUltra.otf",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--blog-big-font",
});

export const mediumHeadingBlogFont = localFont({
  src: [
    {
      path: "../../public/fonts/CheltenhamStdLight.otf",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--blog-medium-font",
});

export const ParagraphBlogFont = localFont({
  src: [
    {
      path: "../../public/fonts/franklin-normal-300.woff2",
    },
    {
      path: "../../public/fonts/franklin-normal-500.woff2",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--blog-paragraph-font",
});
