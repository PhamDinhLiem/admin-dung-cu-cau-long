import React from "react";
import styles from "./Post.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import moment from "moment";
import Button from "../Button";

const cx = classNames.bind(styles);

export default function Post({ post }: any) {
  return (
    <article className={cx("wrapper")}>
      <h1 className={cx("title")}>
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className={cx("des")}>
        <span className={cx("date")}>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
        <p className={cx("des-time")}>Reading time 10 minutes {post.author.name}</p>
      </div>
      <div className={cx("img-wrapper")}>
        <Link href={`/post/${post.slug}`}>
          <img alt="11" className={cx("img")} height={500} width="100%" src={post.featuredImage.url} />
        </Link>
      </div>
      <div className={cx("sumary")}>
        <p>{post.excerpt}</p>
      </div>
      <Button leftIcon={<></>} rightIcon={<FontAwesomeIcon icon={faArrowRight} />} className={cx("widget-box")}>
        <Link href={`/blogs/${post.slug}`}> READ MORE</Link>
      </Button>
    </article>
  );
}
