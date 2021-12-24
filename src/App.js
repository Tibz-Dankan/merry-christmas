import React from "react";
import { Linkedin, Twitter, Instagram } from "react-bootstrap-icons";
import "./App.css";

const App = () => {
  return (
    <div className="page-wrapper">
      <header className="header" header>
        <h3 className="logo">TibzDankan</h3>
        <h2 className="heading">Merry Christmas And Happy New Year</h2>
      </header>
      <div
        className="body bg-image"
        style={{
          backgroundImage: `url("https://image.shutterstock.com/image-illustration/living-room-christmas-interior-scandinavian-260nw-1858459990.jpg")`,
        }}
      >
        <h1 className="my-christmas-msg">
          {" "}
          Tibz Dankan Wishes You A Merry Christmas and Happy New Year !{" "}
        </h1>
      </div>
      <footer className="footer">
        <p className="copyright-msg">
          Copyright &copy; 2021 TibzDankan. All rights reserved
        </p>
        <p className="follow-msg">Follow me on</p>
        <div className="footer-links">
          <nav className="footer-link-with-icon">
            <Linkedin />
            <a
              href="https://www.linkedin.com/in/tibz-dankan-74158721b/?originalSubdomain=ug"
              className="link"
            >
              LinkedIn
            </a>
          </nav>
          <nav className="footer-link-with-icon">
            <Twitter />
            <a href="https://twitter.com/TibzDankan" className="link">
              Twitter
            </a>
          </nav>
          <nav className="footer-link-with-icon">
            <Instagram />
            <a href="https://www.instagram.com/tibsdancan/" className="link">
              Instagram
            </a>
          </nav>
        </div>
        <h6 className="keep-coding-msg">
          Keep Coding! and enjoy the festive season
        </h6>
      </footer>
    </div>
  );
};

export default App;
