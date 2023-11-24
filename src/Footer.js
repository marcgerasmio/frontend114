import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { VscGithub } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import './App.css';

function Footer(){
  return (
    <div className="footer">
      <a href="#facebook"><FaFacebook size={20}/></a>
      <a href="#twitter"><FaTwitter size={20}/></a>
      <a href="#github"><VscGithub size={20}/></a>
      <a href="#linkin"><CiLinkedin size={20}/></a>
    </div>
  );
};
export default Footer;
