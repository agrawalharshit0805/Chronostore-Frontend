import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
          CHRONOSTORE, a fashion haven where style meets substance and individuality finds its voice.
          Step into a world of curated fashion, as we present an exquisite collection of clothing that 
          transcends trends and empowers you to express your unique fashion narrative.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
          At ChronoStore, we are dedicated to providing you with an unparalleled shopping experience for timeless fashion. 
          We value your feedback, queries, and suggestions, and our team is always here to assist you. 
          Get in touch with us through any of the channels, and we will be delighted to address your needs promptly
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Chronostore</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;