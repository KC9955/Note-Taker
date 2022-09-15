import React from "react";
import {FaStickyNote} from "react-icons/fa";
import {FaImages} from "react-icons/fa";
import {FaRegFolderOpen} from "react-icons/fa";
import {FaRegCheckSquare} from "react-icons/fa";

function Footer() {
  return (
    <footer>
     <FaStickyNote className="FaStickyNote"/>
     <FaImages className="FaImages" />
     <FaRegCheckSquare className="FaRegCheckSquare" />
     <FaRegFolderOpen className="FaRegFolderOpen" />
    </footer>
  );
}

export default Footer;
