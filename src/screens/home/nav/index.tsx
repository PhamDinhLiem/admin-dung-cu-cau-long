import React from "react";

interface NavProps {}

const Nav = ({}: NavProps) => {
  return (
    <div className="nav">
      <div className="_w-copyright">
        <div className="text-block-16 w-hidden-medium w-hidden-small w-hidden-tiny">Timeframe Inc. - 2021</div>
      </div>
      <div className="_w-side-nav">
        <a href="/contact" data-w-id="5f59990b-0652-e81d-fcfa-d7629bf5b268" className="nav_links w-inline-block">
          <div className="text-block-18">contact</div>
          <div className="outline-hover w-hidden-medium w-hidden-small w-hidden-tiny">
            <div className="fill-hover" />
          </div>
        </a>
        <div className="ui-circle line" />
        <a href="/vision" data-w-id="5f59990b-0652-e81d-fcfa-d7629bf5b26e" className="nav_links w-inline-block">
          <div className="text-block-18">VISION</div>
          <div className="outline-hover w-hidden-medium w-hidden-small w-hidden-tiny">
            <div className="fill-hover" />
          </div>
        </a>
      </div>
      <a href="/" aria-current="page" className="link__logo w-inline-block w--current">
        <img
          src="https://cdn.prod.website-files.com/5c6648378238e311a00c7e61/5c6648378238e3d5880c7e9f_logo-ts-white.png"
          data-w-id="5f59990b-0652-e81d-fcfa-d7629bf5b274"
          alt=""
          className="logo-ts-2 mobile w-hidden-main"
        />
      </a>
    </div>
  );
};

export default Nav;
