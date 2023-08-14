import React from "react";
import First from "../img/asset 29.svg";
import Third from "../img/asset 26.svg";

const Mentoring = () => {
  const box_data = [
    {
      id: 1,
      img: First,
      title: "You don't know what you don't know",
      para: "When learning a new language, the hardest part is not being aware of the gaps in your knowledge. Our mentors can look at your code and immediately see the ideas you're not familiar with and give you a level-up by unlocking new knowledge.",
    },
    {
      id: 2,
      img: First,
      title: "Learn language-specific conventions",
      para: "Becoming fluent in a language is more than being able to write code in it - it's about being able to think in that language. Our mentors will help guide you to how to reshape your thinking to write idiomatic code.",
    },
    {
      id: 3,
      img: Third,
      title: "Learning with others is fun",
      para: "Getting feedback from real people is an amazingly exciting way to learn. And becoming a mentor and giving feedback yourself is an even bigger step forward. So complete the circle - be mentored and mentor 🎉",
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

export default Mentoring;
