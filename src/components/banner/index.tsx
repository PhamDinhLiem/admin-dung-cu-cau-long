"use client";

import React from "react";
import { BackgroundGradient, BannerWrapper, ImageWrapper, TextWrapper } from "./styled";
import CarouselCustom from "../carousel";
import { Container } from "@/styles/common";

interface BannerProps {}

const Banner = ({}: BannerProps) => {
  return (
    <BannerWrapper>
      <CarouselCustom>
        <ImageWrapper>
          <Container>
            <TextWrapper>
              <h2>{`Nền tảng chuyên nghiệp \n An tâm trọn vẹn!`}</h2>

              <p>
                Dây chuyền làm việc chuyên nghiệp giúp khách hàng tiết kiệm thời gian và đơn giản thủ tục nhất cho khách
                hàng.
              </p>
            </TextWrapper>
          </Container>

          <BackgroundGradient>
            <img
              src="https://hismile.com.vn/wp-content/uploads/2022/03/technology-network-background-scaled.jpg"
              alt="image 1"
              className="h-full w-full object-cover"
            />
          </BackgroundGradient>
        </ImageWrapper>

        <ImageWrapper>
          <Container>
            <TextWrapper>
              <h2>{`Trách nhiệm & Quyền lợi`}</h2>

              <p>Trở thành nền tảng kết nối việc làm quốc dân, được hàng triệu khách hàng tin tưởng và kết nối.</p>
            </TextWrapper>
          </Container>

          <BackgroundGradient>
            <img
              src={`${process.env.basePath}/img/banner-2.jpg`}
              alt="image 1"
              className="h-full w-full object-cover"
            />
          </BackgroundGradient>
        </ImageWrapper>

        <ImageWrapper>
          <Container>
            <TextWrapper>
              <h2>{`Giá trị & Chất lượng`}</h2>

              <p>
                Để hiện thực hóa tầm nhìn & sứ mệnh của mình, HomeEase dựa trên nền tảng hệ giá trị cốt lõi với 3 thành
                tố: Trung thực – An toàn – Chuyên nghiệp.
              </p>
            </TextWrapper>
          </Container>

          <BackgroundGradient>
            <img
              src={`${process.env.basePath}/img/banner-3.jpg`}
              alt="image 1"
              className="h-full w-full object-cover"
            />
          </BackgroundGradient>
        </ImageWrapper>
      </CarouselCustom>
    </BannerWrapper>
  );
};

export default Banner;
