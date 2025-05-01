import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Link from "next/link";
import ThreeIcon from "../../../ThreeIcon/ThreeIcon";
import Menu from "../../../Popper/Menu";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    to: "/",
    title: "HOME",
  },
  {
    to: "/blog",
    title: "BLOG",
    children: [
      {
        title: "minimali",
        to: "",
      },
      {
        title: "minimali",
        to: "",
      },
      {
        title: "minimali",
        to: "",
      },
    ],
  },
  {
    to: "/",
    title: "YOUTOBE",
  },
  {
    to: "/ungho",
    title: "ỦNG HỘ",
  },
  {
    to: "/about",
    title: "ABOUT ME",
  },
  {
    to: "/",
    title: "日本語",
  },
];

export default function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("nav_left")}>
        <ul className={cx("nav-menu")}>
          <li className={cx("menu-item")}>
            <a href="/">HOME</a>
          </li>

          <Menu items={MENU_ITEMS}>
            <li className={cx("menu-item menu-item-blog")}>
              <Link className={cx("menu-item-link")} href="/blog">
                BLOG
              </Link>
            </li>
          </Menu>

          <li className={cx("menu-item")}>
            <Link href="/youtobe">YOUTOBE</Link>
          </li>
          <li className={cx("menu-item")}>
            <Link href="/ungho">ỦNG HỘ</Link>
          </li>
          <li className={cx("menu-item")}>
            <Link href="/about-me">ABOUT ME</Link>
          </li>
          <li className={cx("menu-item")}>
            <Link href="/">日本語</Link>
          </li>
        </ul>

        {/* menu small */}
        <div className={cx("hamburger-icon")}>
          <input type="checkbox" id="checkbox1" className="checkbox1 visuallyHidden" />
          <label htmlFor="checkbox1" className="label-box">
            <div className="hamburger hamburger1">
              <span className="bar bar1"></span>
              <span className="bar bar2"></span>
              <span className="bar bar3"></span>
              <span className="bar bar4"></span>
            </div>
            <div className={cx("nav_right1")}>
              <ThreeIcon />
            </div>
          </label>

          <nav className="navigate">
            <ul className="listItemNav">
              {MENU_ITEMS.map((item, index) => (
                <li key={index} className="itemNav">
                  <a className="link"> {item.title} </a>
                  {item.children && (
                    <ul>
                      {item.children.map((itemChildren, index) => (
                        <li key={index}>{itemChildren.title}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className={cx("nav_right")}>
        <ThreeIcon />
      </div>
    </header>
  );
}
