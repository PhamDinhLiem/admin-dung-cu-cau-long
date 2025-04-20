import React, { Fragment } from "react";
import classNames from "classnames/bind";

import styles from "./Footer.module.scss";
import Link from "next/link";
import Button from "../../../Button";
import { info } from "@/constants/app/info";
import { tags } from "@/constants/app/tag";

const cx = classNames.bind(styles);

export default function Footer() {
  return (
    <div className={cx("wrapper")}>
      <Button className={cx("widget-box")}>INSTAGRAM</Button>
      <div className={cx("img-instagram-parrent")}>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
          {info.listImage.map((image, index) => (
            <Link key={index} href="#">
              {index < 6 ? (
                <div className={cx("img-instagram-box")}>
                  <img className={cx("img-instagram")} src={image.linkImg} alt="" />
                </div>
              ) : (
                <></>
              )}
            </Link>
          ))}
        </div>
      </div>
      <div className={cx("footer-contact")}>
        <div className={cx("info-footer")}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Button className={cx("widget-box")}>TAGS</Button>
              <div className={cx("btn-tag-box")}>
                {tags.map((tag, index) => (
                  <Button key={index} className={cx("btn-tag")} outline smallist>
                    {tag.title}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <Button className={cx("widget-box")}>FOLLOW ON FACEBOOK</Button>
              <div className=""></div>
            </div>
            <div className={cx("widget-subscribe")}>
              <Button className={cx("widget-box")}>SUBSCRIBE</Button>
              <div className={cx("subscribe")}>
                <p>Subscribe nếu bạn muốn theo dõi các bài viết tiếp theo của mình nhé!</p>
              </div>
              <Button rounded className={cx("subscribe-btn")}>
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>
        <p className={cx("info-producer")}>WEBSITE BUILT WITH LEVANHIEU.COM</p>
      </div>
    </div>
  );
}
