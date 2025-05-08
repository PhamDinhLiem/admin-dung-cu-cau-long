import { css, styled } from "styled-components";

export const ContainerBlog = styled.div`
  padding-left: 4%;
  padding-right: 4%;
  width: 100%;
`;

export const BlogsStyle = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: "Montserrat", sans-serif;
    background-color: #fff;
    &:before {
      content: "";
      content: "";
      width: 100%;
      height: 100vh;

      // background-image: url("../public/bg.jpg");
      background-color: #fff;
      position: fixed;
      left: 0;
      top: 0;
      z-index: -1;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  .site-header {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 70;
    background-color: #ececec;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  nav,
  section,
  summary {
    display: block;
  }
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  :root {
    --jp-carousel-primary-color: #fff;
    --jp-carousel-primary-subtle-color: #999;
    --jp-carousel-bg-color: #000;
    --jp-carousel-bg-faded-color: #222;
    --jp-carousel-border-color: #3a3a3a;
    --hover-color: #d3b062;
  }

  h1,
  h2 {
    font-family: var(--blogBlk-extra-font) !important;
  }

  h3,
  h4 {
    font-family: var(--blogBlk-bold-font) !important;
  }

  p {
    font-family: var(--blogBlk-medium-font) !important;
  }

  :root {
    --swiper-navigation-size: 44px;
  }
  :root {
    --swiper-theme-color: #007aff;
  }
  :root {
    --font-headings: unset;
    --font-base: unset;
    --font-headings-default: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell,
      "Helvetica Neue", sans-serif;
    --font-base-default: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell,
      "Helvetica Neue", sans-serif;
  }
  :root {
    --wp--preset--font-size--normal: 16px;
    --wp--preset--font-size--huge: 42px;
  }

  .text-shadow {
    text-shadow: 0px 2px 0px rgb(0 0 0 / 30%);
  }

  .adjacent-post {
    & .arrow-btn {
      transition: width 300ms ease;
      width: 50px;
    }
    &:hover {
      & .arrow-btn {
        width: 60px;
      }
    }
  }

  .react-multi-carousel-list {
    & .arrow-btn {
      transition: width 300ms ease;
      width: 50px;
      &:hover {
        width: 60px;
      }
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  //hamburger
  .visuallyHidden {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
  }
  .hamburger {
    margin: 0 0;
    width: 30px;
    height: 25px;
    position: relative;
    cursor: pointer;
  }
  .hamburger .bar {
    padding: 0;
    width: 30px;
    height: 3px;
    background-color: var(--hover-color);
    display: block;
    border-radius: 4px;
    transition: all 0.4s ease-in-out;
    position: absolute;
  }
  .bar1 {
    top: 0;
  }

  .bar2,
  .bar3 {
    top: 10.5px;
  }

  .bar3 {
    right: 0;
  }

  .bar4 {
    bottom: 0;
  }

  /* HAMBURGER 1 */
  .checkbox1:checked + label > .hamburger1 > .bar1 {
    transform: rotate(47deg);
    transform-origin: 5%;
    width: 33px;
  }

  .checkbox1:checked + label > .hamburger1 > .bar2 {
    transform: translateX(-40px);
    background-color: transparent;
  }

  .checkbox1:checked + label > .hamburger1 > .bar3 {
    transform: translateX(40px);
    background-color: transparent;
  }

  .checkbox1:checked + label > .hamburger1 > .bar4 {
    transform-origin: 5%;
    transform: rotate(-47deg);
    width: 33px;
  }

  ////////@at-root

  /* IF THE checkbox1 IS IN ITS CHECKED STATE, THEN SETTING THE BACKGROUND OF THE MIDDLE LAYER TO COMPLETE BLACK AND OPAQUE :  */

  /* MAIN MENU WITH THE WHITE BACKGROUND AND THE TEXT :  */

  .navigate {
    display: none;
  }
  .listItemNav {
    display: block;
    margin: 0;
    padding: 10px 0;
    width: 100%;
  }
  .itemNav {
    display: block;
    float: none;
    position: relative;
    text-align: left;
    a {
      /* padding: 10px 0; */
      color: #252525;
      display: block;
      font-size: 14px;
      font-size: 0.875rem;
      line-height: 1.5;
      text-decoration: none;
      text-transform: uppercase;
      text-align: center;
      -webkit-transition: 0.4s all linear;
      -moz-transition: 0.4s all linear;
      -o-transition: 0.4s all linear;
      transition: 0.4s all linear;
      font-weight: 700;
      word-wrap: break-word;
      border-bottom: none;
      text-align: left;
    }
  }
  /* IF THE checkbox1 IS CHECKED, THEN INCREASE THE WIDTH OF THE navigate TO 30% , CREATING A SMOOTH EFFECT :  */

  .checkbox1:checked ~ .navigate {
    height: 50vh;
    display: block;
    animation: mymove 0.4s ease;
  }

  .checkbox1 ~ .navigate {
    height: 0vh;
    display: none;
    animation: mymove1 0.4s ease;
  }

  .label-box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @keyframes mymove {
    from {
      height: 0vh;
    }
    to {
      min-height: 20vh;
    }
  }

  @media (min-width: 1200px) {
    .content {
      width: 1170px;
    }
  }

  @media (min-width: 992px) {
    .content {
      width: calc(90%);
    }
  }

  @media (max-width: 576px) {
    .content {
      padding-left: 15px;
      padding-right: 15px;

      width: 100%;
    }
  }
`;
