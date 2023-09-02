import React from "react";
import "./Big_banner.scss";
import Table_girl from "../img/asset 27.svg";
import Lowerlayer2 from "../img/asset 22.svg";
import Lowerdesign2 from "../img/asset 40.svg";
import Big_img from "../img/asset 28.jpeg";

const Big_banner = () => {
  return (
    <>
      <section className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex">
              <div className="row">
                <div className="col-lg-4 p-5">
                  <img src={Table_girl} alt="Table_girl" />
                </div>
                <div className="col-lg-8 p-5">
                  <div className="Middle-design">
                    <div className="for-doubble-logo">
                      <img
                        className="middle-img"
                        src={Lowerlayer2}
                        alt="ground logo"
                      />
                    </div>

                    <h2 className="text-color">
                      <b>
                        Over 3,450 coding exercises. <br /> From "Allergies" to
                        "Zebra Puzzle"okay.
                      </b>
                    </h2>
                    <img
                      className="Lowerdesign mt-lg-3"
                      src={Lowerdesign2}
                      alt=""
                    />
                    <h5 className="mt-3">
                      Discover new and exciting ways to approach an exercise by
                      getting mentored on it. Become more familiar with the
                      conventions, idioms and opinions of a particular
                      programming language.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 shadow2">
              <img className="w-100" src={Big_img} alt="Big_banner" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Big_banner;
