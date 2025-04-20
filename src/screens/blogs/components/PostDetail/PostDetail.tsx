import Link from "next/link";
import React from "react";

import classNames from "classnames/bind";
import styles from "./PostDetail.module.scss";

const cx = classNames.bind(styles);

export default function PostDetail({ post }: any) {
  const getContentFragment = (index: any, text: any, obj: any, type?: any) => {
    let modifiedText: any = text;

    if (obj.bold) {
      modifiedText = <b key={index}>{text}</b>;
    }
    if (obj.italic) {
      modifiedText = <em key={index}>{text}</em>;
    }
    if (obj.underline) {
      modifiedText = <u key={index}>{text}</u>;
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item: any, i: any) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className={cx("paragraph")}>
            {modifiedText.map((item: any, i: any) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item: any, i: any) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={index} alt={obj.title} height={obj.height} width={obj.width} src={obj.src} />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className="lg:p-8 pb-12 mb-8">
      <h1 className={cx("title")}>
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>

      {/* tách ra 1 component */}

      <div className={cx("entry-meta")}>
        <div>
          <span className={cx("entry-meta-icon")}>icon</span>
          <span className={cx("entry-meta-des")}>
            <Link href="/author/thehanoichamomile">thehanoichamomile</Link>
          </span>
        </div>
        <div>
          <span className={cx("entry-meta-icon")}>icon</span>
          <span className={cx("entry-meta-des")}>
            <Link href="/category/cuoc-song-o-ha-noi/">Cuộc sống ở hà nội</Link>,{" "}
            <Link href="/category/nhat-ky/">Nhật ký</Link>
          </span>
        </div>
        <div>
          <span className={cx("entry-meta-icon")}>icon</span>
          <span>4</span>
          <span className={cx("entry-meta-des")}>
            <Link href="/">Comment</Link>
          </span>
        </div>
      </div>

      {/* content */}
      <div className="relative overflow-hidden shadown-md">
        <img src={post.featuredImage.url} alt={post.title} className="object-top  h-full w-full" />
      </div>
      <div className="mt-9">
        {post.content.raw.children.map((typeObj: any, index: any) => {
          const children = typeObj.children?.map((item: any, itemIndex: any) => {
            return getContentFragment(itemIndex, item.text, item);
          });
          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
      </div>
    </div>
  );
}
