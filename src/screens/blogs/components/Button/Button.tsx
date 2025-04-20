import classNames from "classnames/bind";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";
import Link from "next/link";

const cx = classNames.bind(styles);

export default function Button({
  to,
  href,
  smallist = false,
  small = false,
  large = false,
  outline = false,
  text = false,
  disable = false,
  rounded = false,
  leftIcon,
  rightIcon,
  className,
  primary = false,
  children,
  onClick,
  ...passProps
}: any) {
  let Comp: any = "button";
  const props = {
    onClick,
    ...passProps,
  };

  //Xóa props
  if (disable) {
    //delete props.onClick;

    //Remove all event dom when turn props disable
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  //thêm thẻ class vào wrapper
  const classes = cx("wrapper", {
    [className]: className,
    primary,
    outline,
    small,
    smallist,
    large,
    text,
    disable,
    rounded,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}

Button.prototype = {
  to: PropTypes.string,
  href: PropTypes.string,
  small: PropTypes.bool,
  smallist: PropTypes.bool,
  large: PropTypes.bool,
  outline: PropTypes.bool,
  text: PropTypes.bool,
  disable: PropTypes.bool,
  rounded: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  className: PropTypes.string,
  primary: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
