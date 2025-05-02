//file này để export font thôi
import localFont from "next/font/local";

export const tanHiepBigHeadingBlogFont = localFont({
  src: [
    {
      path: "../../public/fonts/CheltenhamStdUltra.otf",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--tanHiepHeading-big-font",
});

export const tanHiepMediumHeadingBlogFont = localFont({
  src: [
    {
      path: "../../public/fonts/CheltenhamStdLight.otf",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--tanHiepHeading-medium-font",
});

export const tanHiepParagraphFont = localFont({
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
  variable: "--tanHiepParagraphFont-font",
});
