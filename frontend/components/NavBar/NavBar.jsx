import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';


// import icon

import { MdNotification } from 'react-icons/md';
import { BsSearct } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";

import Style from "./NavBar.module.css";
import { Discover, HelpCenter, Notification, Profile, SideBar } from './index';
import { Button } from "../componentsindex";
import images from "../../img";



const NavBar = () => {

      //---- Usestate components
      const [discover, setDiscover] = useState(false);
      const [help, setHelp] = useState(false);
      const [notification, setNotification] = useState(false);
      const [profile, setProfile] = useState(false);
      const [openSideMenu, setOpenSideMenu] = useState(false);

      return (

            <div className={Style.navbar}>
                  <div className={style.navbar_container}>
                        <div className={Style.navbar_container_left}>

                        </div>
                        <div className={Style.navbar_container_Right}>

                        </div>
                  </div>
            </div>


      );


};

export default NavBar;