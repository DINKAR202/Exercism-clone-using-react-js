import React from "react";
import "./Explore.scss";
import Leftdesign from "../img/asset 35.svg";
import Rightdesign from "../img/asset 36.svg";
import Lowerlayer from '../img/asset 20.svg'
import Lowerdesign from "../img/asset 40.svg";

const Explore = () => {
  return (
    <>
      <section className="container-fluid">
        <div className="container d-flex justify-content-between py-5">
          <div className="col-lg-2">
            <img src={Leftdesign} alt="Leftdesign" />
          </div>

          <div className="col-lg-6 Middle-design py-3">
            <div className="for-doubble-logo">
              <img
                className="middle-img"
                src={Lowerlayer}
                alt="ground logo"
              />
            </div>

            <h1>
              <b>
                Explore and get fluent in <br /> 67 programming languages
              </b>
            </h1>
            <img className="Lowerdesign" src={Lowerdesign} alt="" />
          </div>

          <div className="col-lg-2">
            <img src={Rightdesign} alt="{Rightdesign}" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Explore;
