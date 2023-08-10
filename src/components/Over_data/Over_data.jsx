import React from "react";
import Lowerlayer from "../img/asset 20.svg";
import "./Over_data.scss";
import Lowerdesign from "../img/asset 40.svg";

const Over_data = () => {
  return (
    <>
      <section className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/* <div className="col-lg-12"> */}
                <div className="col-lg-12 d-flex flex-column Middle-design">
                  <div className="for-doubble-logo">
                    <img
                      className="middle-img"
                      src={Lowerlayer}
                      alt="ground logo"
                    />
                  </div>

                  <h1>
                    <b>
                    Over 3,450 coding exercises. <br /> From "Allergies" to "Zebra Puzzle".
                    </b>
                  </h1>
                  <img className="Lowerdesign" src={Lowerdesign} alt="" />
                </div>
              {/* </div> */}
              <div></div>
            </div>
            <div className="col-lg-6">jdshmfcbhej</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Over_data;
