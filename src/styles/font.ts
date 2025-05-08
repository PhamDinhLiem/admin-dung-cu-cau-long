//file này để export font thôi
import localFont from "next/font/local";

//Các font này cho chi tiết các bài viết
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

//các font này cho layout blog
export const Blk_Bold = localFont({
  src: [
    {
      path: "../../public/fonts/BLKFort-Bold.ttf",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--blogBlk-bold-font",
});

export const Blk_medium = localFont({
  src: [
    {
      path: "../../public/fonts/BLKFort-Book.otf",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--blogBlk-medium-font",
});

export const Blk_ExtraBold = localFont({
  src: [
    {
      path: "../../public/fonts/BLKFort-Extrabold.otf",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--blogBlk-extra-font",
});
