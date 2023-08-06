import React from "react";
import "./hero.scss";
import companylogo from '../img/asset 0.svg'
import Rightlogo from '../img/asset 19.svg'

const hero = () => {
  return (
    <>
      <header className="container-fluid py-5" id="lg-container">
        <div className="container d-flex">
        <div className="row">
          <div className="col-lg-8 left-div">
            <h1>
              <b className="text-color">Get really good at programming.</b>
            </h1>
            <h6>
              Develop fluency in <b>67 programming languages</b> with our unique{" "}
              <br /> blend of learning, practice and mentoring. Exercism is fun,
              effective <br /> and <b> 100% free, forever.</b>
            </h6>

            <div className="mt-4">
              
                <button type="button" class="me-3 px-4 py-3  btn btn-primary shadow">
                  <b>Sign up for free</b>
                </button>
                <button type="button" class=" px-4 py-3 btn btn-outline-primary shadow">
                  <b>Explore languages</b>
                </button>
            </div>

            <div className="col-lg-10 bg-light border-rounded-2 d-flex border border-danger rounded-2 py-2 px-4 mt-5">
                    <img src={companylogo} alt=""  className="me-3"/>
                    <p><b>is an independent, community funded, <br /> not-for-profit organisation.</b></p>
                    <div className="w-25 text-center justify-content-center d-flex my-auto">
                    <a href="#" className="text-primary"><b>Learn more</b></a>
                    </div>
            </div>

          </div>

          <div className="col-lg-4 .d-md-none .d-lg-block .d-sm-none ">
              <img src={Rightlogo} alt="Right logo" />
          </div>
        </div>
        </div>
      </header>
    </>
  );
};

export default hero;
