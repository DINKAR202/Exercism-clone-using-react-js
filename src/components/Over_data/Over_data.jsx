import React from "react";
import Lowerlayer from "../img/asset 22.svg";
import "./Over_data.scss";
import Lowerdesign from "../img/asset 40.svg";
import Allergiess from "../img/zebra-logo.svg";
import C from '../img/lang-logo/c.svg'
import Java from '../img/lang-logo/java.svg'
import Ruby from '../img/lang-logo/ruby.svg'
import Halfpic from '../img/asset 23.jpeg'

const Over_data = () => {
  const box_users = [
    {
      id: 1,
      img: C,
      header: "Allergies",
      para: "Given a person's allergy score, determine whether or not they're allergic to a given.",
      moredata: "+40 more",
    },
    {
      id: 2,
      img: Java,
      header: "Queen Attack",
      para: "Given the position of two queens on a chess board, indicate whether or not they...",
      moredata: "+60 more",
    },
    {
      id: 3,
      img: Ruby,
      header: "Zebra Puzzle",
      para: "Which of the residents drinks water? Who owns the zebra? Can you solve the Zebra...",
      moredata: "+70 more",
    },
    // Add more objects as needed
  ];

  return (
    <section className="container-fluid">
      <div className="px-5">
        <div className="row">
          <div className="col-lg-6 px-2 py-3">
            <div className="col-lg-12 d-flex flex-column Middle-design">
              <div className="for-doubble-logo">
                <img className="middle-img" src={Lowerlayer} alt="ground logo" />
              </div>

              <h2 className="text-color">
                <b>
                  Over 3,450 coding exercises. <br /> From "Allergies" to "Zebra Puzzle".
                </b>
              </h2>
              <img className="Lowerdesign mt-lg-3" src={Lowerdesign} alt="" />
              <h5 className="text-color mt-3">
                Learn by doing. Get better at programming through fun coding exercises that build your understanding of concepts.
              </h5>
            </div>

            {
            box_users.map((user) => 
            (
              <div key={user.id} className="col-lg-12 border mt-3 shadow rounded-3">
                <div className="col-lg-12 d-flex flex-row px-2 py-2">
                  <div className="col-lg-2 horse-pic">
                    <img src={user.img} alt={user.header} />
                  </div>
                  <span className="col-lg-8">
                    <h5>
                      <strong>{user.header}</strong>
                    </h5>
                    <p>
                      {user.para}
                    </p>
                  </span>
                  <span className="col-lg-2 text-color horse-pic">
                    <strong>{user.moredata}</strong>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-6 Half-right shadow">
            <img src={Halfpic} className="w-100" alt="half pic" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Over_data;
