import React from "react";
import "./Header.css";
import {AiOutlineTwitter} from 'react-icons/ai'

const Header = () => {
  return (
    <div className="HeaderContainer">
      <h1 className="header-title">OptimiseYourSearch.net</h1>
      <h2>Streamline your search - only see what you want. Filter by site or date. <br/> More sites coming soon.</h2>
      <h4 className="twitter"><a className="twitter-link" href="https://twitter.com/jw_codes" rel="noreferrer" target="_blank"><AiOutlineTwitter/> @jw_codes</a></h4>
    </div>
  );
};

export default Header;
