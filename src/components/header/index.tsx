import { LinkProps } from "@/@custom-types";
import { useState } from "react";
import HeaderDesktop from "./header-desktop";
import HeaderMobile from "./header-mobile";
import { HeaderWrapper } from "./styled";

interface HeaderProps {}

export const listMenuBlog: LinkProps[] = [
  { value: "home", label: "Home", href: "/blog", type: "link" },
  { value: "about", label: "About", href: "/blog/about", type: "link" },
  {
    value: "personal",
    label: "Personal",
    href: "blog/personal",
    type: "button",
    children: [
      { value: "overview", label: "Overview", href: "blog/personal/", type: "link" },
      { value: "latest-news", label: "Latest News", href: "blog/personal/", type: "link" },
      { value: "market", label: "Market", href: "blog/personal", type: "link" },
      { value: "business", label: "Business", href: "blog/personal", type: "link" },
      { value: "lifestyle", label: "LifeStyle", href: "blog/personal", type: "link" },
      { value: "education", label: "Education", href: "blog/personal", type: "link" },
      { value: "resources", label: "Resources", href: "blog/personal", type: "link" },
    ],
  },
  {
    value: "media",
    label: "Media",
    type: "button",
    children: [
      { value: "linkedin", label: "Linkedin", href: "/personal/", type: "link" },
      { value: "facebook", label: "Facebook ", href: "/personal/", type: "link" },
      { value: "instagram", label: "Instagram", href: "/personal/", type: "link" },
    ],
  },
  { value: "contact", label: "Contact", href: "/blog/contact", type: "link" },
];

const Header = () => {
  const [showInput, setShowInput] = useState(false);

  return (
    <HeaderWrapper>
      <HeaderDesktop data={listMenuBlog} showInput={showInput} setShowInput={setShowInput} />
      <HeaderMobile data={listMenuBlog} showInput={showInput} setShowInput={setShowInput} />
    </HeaderWrapper>
  );
};

export default Header;
