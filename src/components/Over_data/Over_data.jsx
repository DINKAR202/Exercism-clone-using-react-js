import React from "react";
import Lowerlayer from "../img/asset 22.svg";
import "./Over_data.scss";
import Lowerdesign from "../img/asset 40.svg";
// import allergiess from "../img/typing-logo.svg";

const Over_data = () => {
  return (
    <section className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="col-lg-12 d-flex flex-column Middle-design">
              <div className="for-doubble-logo">
                <img
                  className="middle-img"
                  src={Lowerlayer}
                  alt="ground logo"
                />
              </div>

              <h2>
                <b>
                  Over 3,450 coding exercises. <br /> From "Allergies" to "Zebra Puzzle".
                </b>
              </h2>
              <img
                className="Lowerdesign mt-lg-3"
                src={Lowerdesign}
                alt=""
              />
            </div>
            <div className="col-lg-12 shadow">
              <div className="col-lg-12 d-flex flex-row px-2 py-2">
                <div className="col-lg-2">
                  {/* <img src={allergiess} alt="hi" />  */}
                </div>
                <span>
                  <h4><strong>Allergies</strong></h4>
                  <p><strong>Given a person's allergy score, determine whether or not they're allergic to a given...</strong></p>
                </span>
                <p><strong>+40 more</strong></p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">jdshmfcbhej</div>
        </div>
      </div>
    </section>
  );
};

export default Over_data;
