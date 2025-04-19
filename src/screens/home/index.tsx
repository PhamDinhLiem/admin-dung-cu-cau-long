"use client";

import AppContext from "@/contexts/app";
import Loader from "./loading";
import Nav from "./nav";
import { HomePageScreenWrapper } from "./styled";

import { useContext, useEffect, useState } from "react";

interface HomePageScreenProps {}

// Dynamically import a component

const HomePageScreen = ({}: HomePageScreenProps) => {
  const { initJs } = useContext(AppContext);
  const [readyToRender, setReadyToRender] = useState(false);

  useEffect(() => {
    if (initJs) {
      window.innerWidth = 375;
      window.dispatchEvent(new Event("resize"));

      window.innerWidth = 1024;
      window.dispatchEvent(new Event("resize"));
    }
  }, [initJs]);

  return (
    <HomePageScreenWrapper>
      {initJs && (
        <div>
          <a href="http://www.instagram.com/super__skills" target="_blank" className="div-block-334 w-inline-block">
            <div>created by JP ›</div>
          </a>

          <Loader />
          <Nav />

          <a href="/vision" className="_w-logo-ts w-inline-block">
            <img
              src="https://cdn.prod.website-files.com/5c6648378238e311a00c7e61/5ef4dcd563897e74b55d1045_Artboard.svg"
              width={150}
              alt="logo TimeFrame"
              className="logo__img w-hidden-medium w-hidden-small w-hidden-tiny"
            />
          </a>
          <div data-w-id="46566e6c-9271-9e0d-9198-afe6953df2a8" className="second-scroll">
            <div className="wrap__parallax">
              <div className="s-second">
                <div id="w-node-_1b58b1b9-57ac-d14c-14f8-a393a8861a88-a8861a86" className="inner_square">
                  <div>JULY</div>
                  <div>30</div>
                </div>
                <div id="w-node-_1b58b1b9-57ac-d14c-14f8-a393a8861a8d-a8861a86" className="inner_square">
                  <div>JULY</div>
                  <div>17</div>
                </div>
                <div id="w-node-_1b58b1b9-57ac-d14c-14f8-a393a8861a92-a8861a86" className="inner_square">
                  <div>SEPTEMBER</div>
                  <div>14</div>
                </div>
                <div id="w-node-_1b58b1b9-57ac-d14c-14f8-a393a8861a97-a8861a86" className="inner_square">
                  <div>JULY</div>
                  <div>31</div>
                </div>
                <div id="w-node-_1b58b1b9-57ac-d14c-14f8-a393a8861a9c-a8861a86" className="inner_square">
                  <div>JUNE</div>
                  <div>02</div>
                </div>
              </div>
              <div className="s-second">
                <div id="w-node-_1b58b1b9-57ac-d14c-14f8-a393a8861aa2-a8861a86" className="inner_square">
                  <div>MARCH</div>
                  <div>16</div>
                </div>
                <div id="w-node-_1b58b1b9-57ac-d14c-14f8-a393a8861aa7-a8861a86" className="inner_square">
                  <div>DECEMBER</div>
                  <div>25</div>
                </div>
                <div id="w-node-_1b58b1b9-57ac-d14c-14f8-a393a8861aac-a8861a86" className="inner_square">
                  <div>MONDAY</div>
                  <div>3:45 pm</div>
                </div>
                <div id="w-node-_1b58b1b9-57ac-d14c-14f8-a393a8861ab1-a8861a86" className="inner_square">
                  <div>jan</div>
                  <div>jan</div>
                </div>
                <div id="w-node-_1b58b1b9-57ac-d14c-14f8-a393a8861ab6-a8861a86" className="inner_square">
                  <div>2:44</div>
                </div>
                <div id="w-node-_1b58b1b9-57ac-d14c-14f8-a393a8861abb-a8861a86" className="inner_square">
                  <div>tuesday</div>
                </div>
              </div>
              <div className="s-second">
                <div id="w-node-_1b58b1b9-57ac-d14c-14f8-a393a8861ac1-a8861a86" className="inner_square">
                  <div>friday</div>
                  <div>6:50</div>
                </div>
                <div id="w-node-_1b58b1b9-57ac-d14c-14f8-a393a8861ac6-a8861a86" className="inner_square">
                  <div>sunday</div>
                  <div>12:40</div>
                </div>
                <div id="w-node-_1b58b1b9-57ac-d14c-14f8-a393a8861acb-a8861a86" className="inner_square">
                  <div>jan</div>
                  <div>jan</div>
                </div>
                <div id="w-node-_1b58b1b9-57ac-d14c-14f8-a393a8861ad0-a8861a86" className="inner_square">
                  <div>jan</div>
                  <div>jan</div>
                </div>
                <div id="w-node-_1b58b1b9-57ac-d14c-14f8-a393a8861ad5-a8861a86" className="inner_square">
                  <div>jan</div>
                  <div>jan</div>
                </div>
              </div>
              <div className="s-second">
                <div id="w-node-_1b58b1b9-57ac-d14c-14f8-a393a8861adb-a8861a86" className="inner_square">
                  <div>
                    september
                    <br />
                    14
                  </div>
                  <div>wed</div>
                </div>
                <div id="w-node-_1b58b1b9-57ac-d14c-14f8-a393a8861ae0-a8861a86" className="inner_square">
                  <div>jan</div>
                  <div>jan</div>
                </div>
                <div id="w-node-_1b58b1b9-57ac-d14c-14f8-a393a8861ae5-a8861a86" className="inner_square">
                  <div>
                    july
                    <br />
                    30
                  </div>
                  <div>friday</div>
                </div>
                <div id="w-node-_1b58b1b9-57ac-d14c-14f8-a393a8861aea-a8861a86" className="inner_square">
                  <div>jan</div>
                  <div>jan</div>
                </div>
                <div id="w-node-_1b58b1b9-57ac-d14c-14f8-a393a8861aef-a8861a86" className="inner_square">
                  <div>jan</div>
                </div>
                <div id="w-node-_1b58b1b9-57ac-d14c-14f8-a393a8861af4-a8861a86" className="inner_square">
                  <div>jan</div>
                  <div>jan</div>
                </div>
              </div>
            </div>
          </div>
          <div className="wrap-bg w-hidden-medium w-hidden-small w-hidden-tiny">
            <div className="ui__line" />
            <div className="ui__line" />
            <div className="ui__line" />
            <div className="ui__line" />
            <div className="ui__line" />
          </div>
          <div data-w-id="b83a1e5e-ad84-5ec4-ac90-7c5e267e4730" className="wrapper-hero">
            <div className="arrow hide">
              <img
                src="https://cdn.prod.website-files.com/5c6648378238e311a00c7e61/5c6648378238e31a480c7e7f_arrow.svg"
                alt=""
              />
            </div>
            <div
              data-w-id="84903a8c-24c7-12f4-a0da-210f9a5fe5df"
              style={{ opacity: 0 }}
              className="hero__pagination w-hidden-medium w-hidden-small w-hidden-tiny"
            >
              <div className="main__p">What if we could travel through time? Just Slot it!</div>
            </div>
            <div className="nav-scroll w-hidden-medium w-hidden-small w-hidden-tiny">
              <div className="scroll-bar">
                <div data-w-id="f64ff7fd-e226-876a-b8c0-7dbeb1a5c64c" className="pin-scroll" />
              </div>
            </div>
            <div data-w-id="bfe35df8-5281-6e5f-13b3-6a5ba7f872b3" className="iphone__mockup" />
            <div data-w-id="e059fb9b-e09c-30f0-6005-aca67126dcc2" className="wrapper_content">
              <div data-w-id="d2176909-e0cf-ce9c-747a-f57035f70477" className="_w-expand-slot">
                <div data-w-id="67d75cb0-7f39-94e0-d7ff-9227122057b2" className="pic-expand _03" />
                <div data-w-id="1780c7f3-8674-6c07-e5ce-69a740fe54b0" className="pic-expand _02" />
                <div data-w-id="890b4fb9-f5a6-e787-1576-ec105f374d5d" className="pic-expand _01" />
                <div data-w-id="623cdc5a-83be-27d9-bb6f-1c428f15df35" className="pic-expand _04" />
                <div data-w-id="35223df9-6dc6-73d4-6d94-3db1a045180e" className="pic-expand _05" />
                <div data-w-id="1e908f87-7d51-11c4-e730-2b97589f27bf" className="pic-expand _06" />
              </div>
              <div data-w-id="b793fa7b-0a0f-d91a-35da-73673226283b" className="rail-app-device">
                <div className="app-sc fold cc-revolution">
                  <div
                    // src="https://cdn.prod.website-files.com/5c6648378238e311a00c7e61/5c6648378238e30f310c7fb9_app-0006.png"
                    data-w-id="91feef94-58d9-adcc-6326-3bb7b85d3a82"
                    className="_w-slot"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/5c6648378238e311a00c7e61/5c6648378238e35af60c7fb2_app-0001.png"
                      alt="mobile interface screen"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/5c6648378238e311a00c7e61/5c6648378238e352fb0c7fb1_app-0002.png"
                      alt="mobile interface screen"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/5c6648378238e311a00c7e61/5c6648378238e368510c7fc4_app-0003.png"
                      alt="mobile interface screen"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/5c6648378238e311a00c7e61/5c6648378238e33fd40c7fbf_app-0004.png"
                      alt="mobile interface screen"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/5c6648378238e311a00c7e61/5c6648378238e34d4d0c7fb4_app-0005.png"
                      alt="mobile interface screen"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/5c6648378238e311a00c7e61/5c6648378238e34d4d0c7fb4_app-0005.png"
                      alt="mobile interface screen"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/5c6648378238e311a00c7e61/5c6648378238e30f310c7fb9_app-0006.png"
                      alt="mobile interface screen"
                    />
                  </div>
                </div>
                <div className="nav-bar">
                  <img
                    src="https://cdn.prod.website-files.com/5c6648378238e311a00c7e61/5f3f154d31fd617446d8f759_BASE.png"
                    sizes="(max-width: 991px) 250px, 360px"
                    srcSet="https://cdn.prod.website-files.com/5c6648378238e311a00c7e61/5f3f154d31fd617446d8f759_BASE-p-500.png 500w, https://cdn.prod.website-files.com/5c6648378238e311a00c7e61/5f3f154d31fd617446d8f759_BASE.png 720w"
                    alt=""
                  />
                </div>
                <div data-w-id="b793fa7b-0a0f-d91a-35da-736732262840" className="_01-app-feed">
                  <img
                    src="https://cdn.prod.website-files.com/5c6648378238e311a00c7e61/5c6648378238e342cc0c7fba_app-002-feed.jpg"
                    loading="eager"
                    alt="mobile interface screen - profile page"
                  />
                </div>
                <div data-w-id="b793fa7b-0a0f-d91a-35da-736732262841" className="_02-app-friends">
                  <div className="_w-friends-app">
                    <div className="ui-friends-header">
                      <div className="div-block-318">
                        <img
                          src="https://cdn.prod.website-files.com/5c6648378238e311a00c7e61/5c6648378238e3742b0c7f7e_Pic.png"
                          width={117}
                          alt=""
                          className="user-dj"
                        />
                      </div>
                    </div>
                    <div className="ui-friends-feed" />
                  </div>
                </div>
                <div className="_03-app-search">
                  <div>
                    <img
                      src="https://cdn.prod.website-files.com/5c6648378238e311a00c7e61/5c6648378238e362ce0c7f91_img-search-02.jpg"
                      sizes="(max-width: 991px) 252px, 360px"
                      srcSet="https://cdn.prod.website-files.com/5c6648378238e311a00c7e61/5c6648378238e362ce0c7f91_img-search-02-p-500.jpeg 500w, https://cdn.prod.website-files.com/5c6648378238e311a00c7e61/5c6648378238e362ce0c7f91_img-search-02-p-800.jpeg 800w, https://cdn.prod.website-files.com/5c6648378238e311a00c7e61/5c6648378238e362ce0c7f91_img-search-02-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/5c6648378238e311a00c7e61/5c6648378238e362ce0c7f91_img-search-02.jpg 1125w"
                      alt="mobile interface screen - profile page"
                      className="image-38"
                    />
                  </div>
                </div>
                <div className="_04-app-news">
                  <img
                    src="https://cdn.prod.website-files.com/5c6648378238e311a00c7e61/5c6648378238e39e210c7faf_img-news.jpg"
                    sizes="(max-width: 991px) 252px, 360px"
                    srcSet="https://cdn.prod.website-files.com/5c6648378238e311a00c7e61/5c6648378238e39e210c7faf_img-news-p-500.jpeg 500w, https://cdn.prod.website-files.com/5c6648378238e311a00c7e61/5c6648378238e39e210c7faf_img-news-p-800.jpeg 800w, https://cdn.prod.website-files.com/5c6648378238e311a00c7e61/5c6648378238e39e210c7faf_img-news-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/5c6648378238e311a00c7e61/5c6648378238e39e210c7faf_img-news.jpg 1125w"
                    alt="mobile interface screen - profile page"
                    className="image-38"
                  />
                </div>
                <div className="_05-app-profile">
                  <img
                    src="https://cdn.prod.website-files.com/5c6648378238e311a00c7e61/5c6648378238e352040c7f99_img-profile.jpg"
                    sizes="(max-width: 991px) 252px, 360px"
                    srcSet="https://cdn.prod.website-files.com/5c6648378238e311a00c7e61/5c6648378238e352040c7f99_img-profile-p-500.jpeg 500w, https://cdn.prod.website-files.com/5c6648378238e311a00c7e61/5c6648378238e352040c7f99_img-profile-p-800.jpeg 800w, https://cdn.prod.website-files.com/5c6648378238e311a00c7e61/5c6648378238e352040c7f99_img-profile-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/5c6648378238e311a00c7e61/5c6648378238e352040c7f99_img-profile.jpg 1125w"
                    alt="mobile interface screen - profile page"
                    className="image-38"
                  />
                </div>
                <div className="_06-app-slot">
                  <div className="pic-expand _03" />
                </div>
              </div>
              <div
                data-w-id="3e2c62fd-4ae3-9693-3f3f-d5be3d34f55d"
                style={{
                  WebkitTransform:
                    "translate3d(0, 0, 0) scale3d(0.4, 0.4, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  MozTransform: "translate3d(0, 0, 0) scale3d(0.4, 0.4, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  msTransform: "translate3d(0, 0, 0) scale3d(0.4, 0.4, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  transform: "translate3d(0, 0, 0) scale3d(0.4, 0.4, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                }}
                className="picture w-hidden-medium w-hidden-small w-hidden-tiny"
              />
              <div data-w-id="9f30c897-a9bb-0a15-0ecb-cc1fbfbf4b2e" className="picture mobile w-hidden-main" />
              <div
                data-w-id="ede531bd-dbae-f952-8c90-933fdf7c1cdc"
                className="wrap-pictures w-hidden-medium w-hidden-small w-hidden-tiny"
              >
                <div
                  data-w-id="51316fe1-6065-aeef-3742-b4af07823946"
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(0.6000000000000006, 0.6000000000000006, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(0.6000000000000006, 0.6000000000000006, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0, 0) scale3d(0.6000000000000006, 0.6000000000000006, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(0.6000000000000006, 0.6000000000000006, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="picture-6"
                />
                <div
                  data-w-id="6ed06a05-42e8-e28a-2c26-c8102d031f93"
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform: "translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="picture-5"
                />
                <div
                  data-w-id="98ebdd7b-d4ca-9a4e-0dd1-24e7a526bec8"
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(0.3000000000000003, 0.3000000000000003, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(0.3000000000000003, 0.3000000000000003, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0, 0) scale3d(0.3000000000000003, 0.3000000000000003, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(0.3000000000000003, 0.3000000000000003, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="picture-4"
                />
                <div
                  data-w-id="e6b3e3b1-42bf-1da6-2b66-e6f392454509"
                  style={{
                    opacity: 0,
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform: "translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="picture-3"
                />
                <div
                  data-w-id="c68dd869-1cef-443d-9f79-25249bdd4444"
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(0.4, 0.4, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(0.4, 0.4, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0, 0) scale3d(0.4, 0.4, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform: "translate3d(0, 0, 0) scale3d(0.4, 0.4, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="picture-2"
                />
              </div>
              <div data-w-id="cd107204-2f99-110b-8b2f-58c33e163abd" className="wrap-pictures cc-mobile w-hidden-main">
                <div data-w-id="cd107204-2f99-110b-8b2f-58c33e163abe" className="picture-6" />
                <div data-w-id="cd107204-2f99-110b-8b2f-58c33e163abf" className="picture-5" />
                <div data-w-id="cd107204-2f99-110b-8b2f-58c33e163ac0" className="picture-4" />
                <div data-w-id="cd107204-2f99-110b-8b2f-58c33e163ac1" className="picture-3" />
                <div data-w-id="cd107204-2f99-110b-8b2f-58c33e163ac2" className="picture-2" />
              </div>
              <div data-w-id="6738a2ab-0569-ccba-6d3a-9ab97053e001" className="notch">
                <img
                  src="https://cdn.prod.website-files.com/5c6648378238e311a00c7e61/5c6648378238e38cb70c7f58_ui-notch-time.png"
                  data-w-id="2036e878-fa44-310d-6b8e-5fcab104e7df"
                  sizes="(max-width: 991px) 232px, 340px"
                  srcSet="https://cdn.prod.website-files.com/5c6648378238e311a00c7e61/5c6648378238e38cb70c7f58_ui-notch-time-p-500.png 500w, https://cdn.prod.website-files.com/5c6648378238e311a00c7e61/5c6648378238e38cb70c7f58_ui-notch-time-p-800.png 800w, https://cdn.prod.website-files.com/5c6648378238e311a00c7e61/5c6648378238e38cb70c7f58_ui-notch-time.png 851w"
                  alt=""
                  className="img-notch"
                />
              </div>
              <div data-w-id="27276687-9ecb-4ce6-8f07-15eee8bfb886" className="iphone-wrapper-device base">
                <div className="app-sc">
                  <div data-w-id="d239e00c-ff1a-6c9a-7f62-5a862df4cfbf" className="over-img" />
                  <img
                    src="https://cdn.prod.website-files.com/5c6648378238e311a00c7e61/5c6648378238e3831d0c7fb8_app-001.jpg"
                    alt="mobile interface screen - profile page"
                    className="image-25"
                  />
                </div>
              </div>
            </div>
            <div className="hero__track__heading">
              <div data-w-id="f314823e-a265-a25e-f277-84ab995cb271" className="_w-hero-ttitle">
                <h1
                  data-w-id="506e0e73-44d4-e5a6-0dc6-6b80db2ea668"
                  style={{
                    WebkitTransform:
                      "translate3d(35VW, 30VH, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(35VW, 30VH, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(35VW, 30VH, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(35VW, 30VH, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="heading-30"
                >
                  A new way of designing, discovering and sharing time.
                </h1>
              </div>
            </div>
            <div
              data-w-id="589fa596-63c0-1bda-fc75-3c46359c46d5"
              style={{ display: "flex" }}
              className="content__sliders w-hidden-medium w-hidden-small w-hidden-tiny"
            >
              <div className="_w-rail">
                <div className="rail-sections">
                  <div data-w-id="aade15b4-4e1d-14bd-2468-77ce79f55a07" className="_w-title-feed">
                    <h1 className="h1-section">Feed</h1>
                  </div>
                  <div data-w-id="33803530-58ee-4227-3e41-de0f3e76e93f" className="_w-title-friends">
                    <h1 className="h1-section">Friends</h1>
                  </div>
                  <div className="_w-title-search">
                    <h1 className="h1-section">Search</h1>
                  </div>
                  <div className="_w-title-news">
                    <h1 className="h1-section">News</h1>
                  </div>
                  <div className="_w-title-profile">
                    <h1 className="h1-section">Profile</h1>
                  </div>
                  <div className="_w-title-slot">
                    <h1 className="h1-section">Slot</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-container">
            <div className="wrapper-section top" />
            <div data-w-id="5439f2d7-1b03-1310-68e3-a7014984a1e4" className="wrapper-section _001">
              <div className="inner__content">
                <h2 className="h2__page">Join the revolution</h2>
                <div className="main__p">
                  Unlike other social networks TimeFrame captures not only the past and the present, but also the future
                  activities of people. It closes the last gap. We call it the SOCIAL DIARY.
                </div>
              </div>
            </div>
            <div data-w-id="41df2db4-abbb-f935-792d-7fd75c33ec9f" className="wrapper-section cc-feed">
              <div className="inner__content">
                <div className="h-mobile w-hidden-main">
                  <div>Feed</div>
                </div>
                <h2 className="h2__page">The first social network for time</h2>
                <div className="main__p">
                  With TimeFrame finally people share their upcoming plans and past experiences in a calendar system.
                  It’s easy to find out when and where friends are available or what they are doing int he future.
                </div>
              </div>
            </div>
            <div data-w-id="835ba117-0cd5-2ab7-c800-d3fe922c3020" className="wrapper-section cc-friends">
              <div data-w-id="02927b82-8d7d-ba26-859c-18a64eba8239" className="inner__content">
                <div className="h-mobile w-hidden-main">
                  <div>Friends</div>
                </div>
                <h2 className="h2__page">Follow friends 'calendars</h2>
                <div className="main__p">
                  Curious to know what your favorite stars are up to, wanting to discover special offers or when the
                  weekly yoga classes takes place? Easy! Just subscribe to their calendars to get the inside info on
                  their life and times.
                </div>
              </div>
            </div>
            <div data-w-id="28d856cb-5292-0ddf-b203-6dadb72d592b" className="wrapper-section cc-search">
              <div className="inner__content">
                <div className="h-mobile w-hidden-main">
                  <div>Search</div>
                </div>
                <h2 className="h2__page">Be inspired by others and save their slots</h2>
                <div className="main__p">
                  Similar to Google Maps, where you navigate through the locations (GPS), with Timeslot you navigate
                  through time (TPS) to find public Slots. It’s a new way of keeping track of dates. One tap, it’s done!
                </div>
              </div>
            </div>
            <div data-w-id="ba23c016-ec7d-b4b1-f361-d17aad6106cd" className="wrapper-section cc-news">
              <div className="inner__content">
                <div className="h-mobile w-hidden-main">
                  <div>News</div>
                </div>
                <h2 className="h2__page">A beautiful way to create the future</h2>
                <div className="main__p">
                  Timeframe raises the calendar to an all new level. For the first time we can comment on event dates. A
                  simple but powerful functionality, which will change how we plan our daily lives and communicate with
                  each other.
                </div>
              </div>
            </div>
            <div data-w-id="e3781b35-607c-361d-7d30-668d7219d034" className="wrapper-section cc-profile">
              <div className="inner__content">
                <div className="h-mobile w-hidden-main">
                  <div>Profile</div>
                </div>
                <h2 className="h2__page">Your personal time machine</h2>
                <div className="main__p">
                  A cool, easy-to-use, yet powerful multimedia calendar for creating Slots with photos, videos, music,
                  voice memos and notes. A portable cork board for all our moments.
                </div>
              </div>
            </div>
            <div data-w-id="560b45f5-2652-e8fb-bc77-458919206ffb" className="wrapper-section cc-profile slot">
              <div className="inner__content">
                <div className="h-mobile w-hidden-main">
                  <div>Slot</div>
                </div>
                <h2 className="h2__page">A book of memories for eternity</h2>
                <div className="main__p">
                  When we were little kids, we all loved to create a personal diary. Wouldn’t it be wonderful if we
                  could save all our magical moments? Just create a Slot and your calendar becomes a personal diary.
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper h">
            <div data-w-id="441162c4-e22b-be01-2484-74fd5dc3a169" className="track cc-product-pages sites hor">
              <div className="section cc-sticky wide _02">
                <div className="_w-screen-title">
                  <div className="_w-label-everyday every">
                    <h1
                      data-w-id="1766d0e4-9c1a-9be0-5d52-61bd3150ceb8"
                      style={{
                        WebkitTransform:
                          "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(90DEG) rotateY(0) rotateZ(0) skew(0, 0)",
                        MozTransform:
                          "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(90DEG) rotateY(0) rotateZ(0) skew(0, 0)",
                        msTransform:
                          "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(90DEG) rotateY(0) rotateZ(0) skew(0, 0)",
                        transform:
                          "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(90DEG) rotateY(0) rotateZ(0) skew(0, 0)",
                        transformStyle: "preserve-3d",
                      }}
                      className="heading__bottom"
                    >
                      Every
                    </h1>
                  </div>
                  <div className="_w-label-everyday">
                    <div
                      data-w-id="f27d67f3-313f-dfb5-0638-246d84da92c9"
                      style={{ width: "0.1%" }}
                      className="hr-title"
                    />
                    <h1
                      data-w-id="6f94f813-96d6-024b-173b-55693bde54d6"
                      style={{
                        WebkitTransform:
                          "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(90DEG) rotateY(0) rotateZ(0) skew(0, 0)",
                        MozTransform:
                          "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(90DEG) rotateY(0) rotateZ(0) skew(0, 0)",
                        msTransform:
                          "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(90DEG) rotateY(0) rotateZ(0) skew(0, 0)",
                        transform:
                          "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(90DEG) rotateY(0) rotateZ(0) skew(0, 0)",
                        transformStyle: "preserve-3d",
                      }}
                      className="heading__bottom"
                    >
                      Day
                    </h1>
                  </div>
                  <div className="_w-label-everyday counts">
                    <h1
                      data-w-id="98ddae8a-42dc-c6c2-ef22-390e41d5f1a9"
                      style={{
                        WebkitTransform:
                          "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(90DEG) rotateY(0) rotateZ(0) skew(0, 0)",
                        MozTransform:
                          "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(90DEG) rotateY(0) rotateZ(0) skew(0, 0)",
                        msTransform:
                          "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(90DEG) rotateY(0) rotateZ(0) skew(0, 0)",
                        transform:
                          "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(90DEG) rotateY(0) rotateZ(0) skew(0, 0)",
                        transformStyle: "preserve-3d",
                      }}
                      className="heading__bottom"
                    >
                      Counts
                    </h1>
                  </div>
                  <div className="wrapper__comingsoon">
                    <div data-w-id="45545f66-7e2c-8343-7253-0e17e30da0e2" style={{ opacity: 0 }} className="main__p sm">
                      Coming soon on the <br />
                      AppStore and Google Play
                    </div>
                  </div>
                </div>
                <div data-w-id="0eb380eb-dc9c-63a1-327c-ca119bd4dece" className="triggers _02" />
              </div>
            </div>
          </div>
        </div>
      )}
    </HomePageScreenWrapper>
  );
};

export default HomePageScreen;
