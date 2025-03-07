import React from "react";
import ground from "../assets/ground.jpg";
import Section from "./Section";
import { useNavigate } from "react-router-dom";

const Myhome = () => {
  const navigate = useNavigate();

  const handelClick = () => {
    navigate("/Button");
  };

  return (
    <>
      <div className="w-full">
        <div className="flex justify-between items-center px-8 py-4">
          <div className="flex items-center gap-4">
            <img
              src={ground}
              alt="Araniko College Logo"
              className="h-12 w-12"
            />
            <div>
              <h1 className="text-2xl font-bold">ARANIKO COLLEGE</h1>
              <p className="text-sm text-gray-600">
                OF BUSINESS AND TECHNOLOGY
              </p>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <nav>
              <ul className="flex gap-6 font-bold">
                <li>Home</li>
                <li>About Us</li>
                <li>Faculty</li>
                <li>Gallery</li>
                <li>Contact Us</li>
              </ul>
            </nav>
          </div>
          <button
            onClick={handelClick}
            className="px-4 py-2 rounded bg-[rgb(21,50,67)] text-white cursor-pointer hover:bg-[rgb(20,40,57)]"
          >
            Login
          </button>
        </div>

        <div className="relative w-full h-[70vh]">
          <img
            src={ground}
            alt="Araniko College Campus"
            className="w-full h-full object-cover cursor-pointer"
          />
        </div>

        <div className="flex justify-around items-center px-8 py-3 bg-[#B5FFE1]">
          <div>
            <span className="font-bold mr-4 bg-primary-color">
              Announcements:
            </span>
            <span>Admissions Open for 2025 | Scholarship 2025</span>
          </div>
          <button className="px-4 py-2 rounded bg-teal-600 text-white">
            Prospectus
          </button>
        </div>
      </div>
      <Section />
    </>
  );
};

export default Myhome;
