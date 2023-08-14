import React from "react";
import "./Big_banner.scss";
import Table_girl from "../img/asset 27.svg";
import Lowerlayer2 from "../img/asset 22.svg";
import Lowerdesign2 from "../img/asset 40.svg";

const Big_banner = () => {
  return (
    <>
      <section className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="col-lg-4 p-5 border">
                <img src={Table_girl} alt="Table_girl" />
              </div>
              <div className="col-lg-8">
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
                      "Zebra Puzzle".
                    </b>
                  </h2>
                  <img
                    className="Lowerdesign mt-lg-3"
                    src={Lowerdesign2}
                    alt=""
                  />
                  <h5 className="text-color mt-3">
                    Learn by doing. Get better at programming through fun coding
                    exercises that build your understanding of concepts.
                  </h5>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Big_banner;
