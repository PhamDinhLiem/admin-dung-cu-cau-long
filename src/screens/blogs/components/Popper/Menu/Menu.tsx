import Tippy from "@tippyjs/react";
import React, { useState } from "react";
import { Poper as PopperWrapper } from "..";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";

const cx = classNames.bind(styles);

export default function Menu({ children, items = [] }: any) {
  const [showResult, setShowResult] = useState(true);
  const renderItem = () => {
    return items.map((item: any, index: any) => {
      return <MenuItem key={index} data={item} />;
    });
  };
  const handleHideResult = () => {
    setShowResult(false);
  };
  const renderResult = (attrs: any) => {
    return (
      <div className="box" tabIndex="-1" {...attrs}>
        <PopperWrapper>{renderItem()}</PopperWrapper>
      </div>
    );
  };
  return (
    <Tippy
      //visible={showResult}
      // hideOnClick={hideOnClick}
      //onClickOutside={handleHideResult}
      offset={[12, -6]}
      delay={[0, 700]}
      placement="bottom"
      interactive={true}
      appendTo={() => document.body}
      render={renderResult}
      // onHide={handleResetToFirstPage}
    >
      {children}
    </Tippy>
  );
}
