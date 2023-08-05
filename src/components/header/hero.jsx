import React from "react";
import "./hero.scss";
import companylogo from '../img/asset 0.svg'

const hero = () => {
  return (
    <>
      <header className="container-fluid py-5" id="lg-container">
        <div className="container">
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

            <div className="col-lg-10 border-rounded-2 d-flex border py-4 px-4 mt-4">
                    <img src={companylogo} alt=""  className="me-3"/>
                    <p>is an independent, community funded, not-for-profit organisation.</p>
                    <div className="w-25 text-center justify-content-center d-flex my-auto">
                    <a href="#" className="text-color"><b>Learn more</b></a>
                    </div>
            </div>

          </div>
          <div className="col-lg-4"></div>
        </div>
      </header>
    </>
  );
};

export default hero;
