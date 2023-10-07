import React from 'react';

// Rest of your code in menuList.js

import '../Styles/LeftMenu.css';
import {FaSpotify,FaEllipsisH} from 'react-icons/fa';
import {BiSearchAlt} from "react-icons/bi";
import {Menu} from "./Menu";
import {MenuList} from "./MenuList";

function LeftMenu() {
  return (
    <div className="LeftMenu">
      <div className="logoContainer">
        <FaSpotify/>
        <h2>Spotify</h2>
        <FaEllipsisH/>
      </div>
      <div className="searchBox">
        <input type="text" placeholder='Search...'/>
        <i className="searchIcon">
          <BiSearchAlt/>
        </i>
      </div>

      <Menu title={"Menu"} menuObject={MenuList}/>
    </div>
  )
}

export  {LeftMenu};
