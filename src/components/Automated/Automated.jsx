import React from "react";
import First from "../img/asset 24.svg";
import Second from "../img/asset 25.svg";
import Third from "../img/asset 26.svg";

const Automated = () => {
  const box_data = [
    {
      id: 1,
      img: First,
      title: "Write code locally, in your own space",
      para: "Exercism is primarily built as a CLI-first tool. Download and submit exercises right from your terminal.",
    },
    {
      id: 2,
      img: Second,
      title: "Use the Exercism in-browser editor",
      para: "Don't spend hours installing a language locally just to try it out. We support all 70 of our programming languages in our in-browser editor.",
    },
    {
      id: 3,
      img: Third,
      title: "Get automated analysis on your code",
      para: "Not quite sure how well you've done? We run automatic analysis on your solutions to give you quick feedback and points of improvement.",
    },
  ];

  return (
    <>
      <div className="container-fluid">
        <div className="container d-flex mt-5 g-3">
          <div className="row">
          {box_data.map((item) => (
            <div key={item.id} className="col-lg-4">
              <img src={item.img} alt={item.title} />
              <h5>
                <strong>{item.title}</strong>
              </h5>
              <p>{item.para}</p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Automated;
