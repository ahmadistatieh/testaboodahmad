import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Guidesearchbackground from "./touguide.png";


import "./Guidesearch.css";
import Navbar from '../Navbar/Navbar';

const tourguidecardData = [
  {
    name: "ahmad",
    role: "Tour Guide",
    imageUrl:
      "https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "mohammed",
    role: "Tour Guide",
    imageUrl:
      "https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "ali",
    role: "Tour Guide",
    imageUrl:
      "https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "rama",
    role: "Tour Guide",
    imageUrl:
      "https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "alaa",
    role: "Tour Guide",
    imageUrl:
      "https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "hoss",
    role: "Trip Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1549417229-aa67d3263c09?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "farah",
    role: "Tour Guide",
    imageUrl:
      "https://images.unsplash.com/photo-1548094878-84ced0f6896d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "farah",
    role: "Tour Guide",
    imageUrl:
      "https://images.unsplash.com/photo-1548094878-84ced0f6896d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "farah",
    role: "Tour Guide",
    imageUrl:
      "https://images.unsplash.com/photo-1548094878-84ced0f6896d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "farah",
    role: "Tour Guide",
    imageUrl:
      "https://images.unsplash.com/photo-1548094878-84ced0f6896d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

function Guidesearch() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCards = tourguidecardData.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleshowprofile = () => {
    navigate("/GuideProfile");
  };

  return (
    <div>
      <Navbar/>
      <div className="Guidepagecontainer">
        <div className="guidesearch">
          <div className="img-fluid containerguideimg">
            <img src={Guidesearchbackground} alt="Background" />
          </div>

          <form
            className="tourguidesearchbar col-12"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              className="tourguidesearchinput"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="tourguidesearchbutton">
              <svg
              className="svg-Guide"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 50 50"
              >
                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
              </svg>
            </button>
          </form>

          <div className="tourguidecardscontainer">
            <div className="tourguidebox">
              {filteredCards.map((card, index) => (
                <div className="tourguidecard" key={index}>
                  <div className="imgBx">
                    <img src={card.imageUrl} alt="CardImg" />
                  </div>
                  <div className="tourguidedetails">
                    <h2>
                      {card.name}
                      <br />
                      <span>{card.role}</span>
                      <button type="button" onClick={handleshowprofile}>
                        {" "}
                        showprofile{" "}
                      </button>
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guidesearch;