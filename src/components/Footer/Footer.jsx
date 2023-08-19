import React from "react";
import Footer_data from "./Footer_data";
import "./Footer.scss"

const Footer = () => {
  return (
    <footer className="container-fluid bg-primary2 text-light">
      <div className="container border-top border-bottom py-5">
        <div className="row">
          {Footer_data.map((section) => (
            <div key={section.id} className="col-lg-2">
              <h6><strong>{section.title}</strong></h6>
              <img className="img2" src={section.img} alt={`${section.title} icon`} />
              {Object.keys(section).map((key) => {
                if (key.startsWith("para")) {
                  return <p key={key}>{section[key]}</p>;
                }
                return null;
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="container py-3 d-flex justify-content-between">
            <h6>Exercism is not-for-profit organisation <a href="#"><u>registered in the UK</u></a>. Its trustees are <a href="#"><u>Katrina Owen, Jeremy Walker</u></a> and <a href="#"><u>Erik Schierboom</u></a>.</h6>
            <h5>© 2023 Exercism</h5>
      </div>
    </footer>
  );
};

export default Footer;
