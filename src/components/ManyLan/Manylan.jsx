import React from "react";
import "./Manylan.scss";
import Sdata from "../Langdata";

const Manylan = (props) => {
  return (
    <>
      <section className="container-fluid">
        <div className="container d-flex flex-wrap"> {/* Added flex-wrap class */}
          {Sdata.map((item, index) => (
            <div key={index} className="col-lg-2 card-lan text-center">
              <img src={item.imgsrc} className="mb-3" alt="" />
              <h6>
                <b>{item.title}</b>
              </h6>
              <p>{item.para}</p>
            </div>
          ))}
        </div>
        {/* bottom function */}
        <div className="container btm_box d-flex mt-3">
          <div className="col-lg-4 left_line"></div>
          <div className="col-lg-3 middle_box">
            {" "}
            <button className="btn">
              <b>
                <a href="#">See all 67 Language Tracks -</a>
              </b>
            </button>{" "}
          </div>
          <div className="col-lg-5 right_line"></div>
        </div>
      </section>
    </>
  );
};

export default Manylan;
