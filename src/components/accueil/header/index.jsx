import React from "react";
import Image from "next/image";

import "./Header.scss";
import glass from "../../../asstes/cocktail_glass.png";

const Header = () => {
  return (
    <div className="header">
      <Image src={glass} alt="glass" className="glass left_glass" />
      <div>
        <h1 className="header_title">Welcome to TheCocktailDB</h1>
        <p className="header_description">
          An open, crowd-sourced database of drinks and cocktails from around
          the world. We also offer a free JSON API for anyone wanting to use it.
          If you like the site, please consider supporting us on Patreon by
          clicking the link below...
        </p>
      </div>
      <Image src={glass} alt="glass" className="glass" />
    </div>
  );
};

export default Header;
