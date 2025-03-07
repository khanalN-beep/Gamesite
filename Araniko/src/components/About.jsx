import React from "react";
import green from "../assets/green.jpg";
import usa from "../assets/usa.jpg";
import pic from "../assets/pic.jpg";
import Mision from "./Mision";

const About = () => {
  const cards = [
    {
      id: 1,
      title: "Know More About The Araniko",
      description:
        "Recognizing the changing business scenario and approach of the students towards learning, we at Araniko College of Business and Technology strive to prepare professionals with competitive skills and dynamic personality.",
      imgSrc: green,
    },
    {
      id: 2,
      title: "Rachana Basnet",
      description:
        "Recognizing the changing business scenario and approach of the students towards learning, we at Araniko College of Business and Technology strive to prepare professionals with competitive skills and dynamic personality.",
      imgSrc: pic,
    },
    {
      id: 3,
      title: "Nabin Paudyal",
      description:
        "Recognizing the changing business scenario and approach of the students towards learning, we at Araniko College of Business and Technology strive to prepare professionals with competitive skills and dynamic personality.",
      imgSrc: usa,
    },
  ];

  return (
    <>
      <div className="h-[800px]">
        <div className="ml-24">
          <p className="font-light text-teal-500">About Araniko</p>
          <h1 className="font-bold text-3xl">Know more about Araniko</h1>
          <div className="mt-12 flex flex-wrap gap-6 cursor-pointer ">
            {cards.map((card) => (
              <div
                key={card.id}
                className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={card.imgSrc}
                  alt="Araniko College"
                  className="w-full h-50 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-teal-600 font-medium">
                    About The Institute
                  </p>
                  <h2 className="text-lg font-semibold mt-1">{card.title}</h2>
                  <p className="text-gray-600 text-sm mt-2">
                    {card.description}
                  </p>
                  <a
                    href="#"
                    className="text-teal-600 font-medium mt-3 inline-block"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Mision />
      </div>
    </>
  );
};

export default About;
