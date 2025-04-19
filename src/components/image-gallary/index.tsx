import React from "react";
import { ImageGalleryWrapper } from "./styled";

interface ImageGalleryProps {}

const ImageGallery = ({}: ImageGalleryProps) => {
  return (
    <ImageGalleryWrapper>
      <div className="image-container">
        <div className="image">
          <img src={`${process.env.basePath}/img/blog.png`} alt="" />
        </div>
        <div className="image">
          <img src={`${process.env.basePath}/img/blog.png`} alt="" />
        </div>
        <div className="image">
          <img src={`${process.env.basePath}/img/blog.png`} alt="" />
        </div>
        <div className="image">
          <img src={`${process.env.basePath}/img/blog.png`} alt="" />
        </div>
        <div className="image">
          <img src={`${process.env.basePath}/img/blog.png`} alt="" />
        </div>
        <div className="image">
          <img src={`${process.env.basePath}/img/blog.png`} alt="" />
        </div>
        <div className="image">
          <img src={`${process.env.basePath}/img/blog.png`} alt="" />
        </div>
        <div className="image">
          <img src={`${process.env.basePath}/img/blog.png`} alt="" />
        </div>
        <div className="image">
          <img src={`${process.env.basePath}/img/blog.png`} alt="" />
        </div>
      </div>
    </ImageGalleryWrapper>
  );
};

export default ImageGallery;
