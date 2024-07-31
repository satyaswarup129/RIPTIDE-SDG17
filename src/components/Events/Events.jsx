import React from "react";
import "./Events.css";
import gallery_1 from "../../assets/gallary-1.png";
import gallery_2 from "../../assets/gallary-2.png";
import gallery_3 from "../../assets/gallary-3.png";
import gallery_4 from "../../assets/gallary-4.png";
import white_arrow from "../../assets/white-arrow.png";
import { BrowserRouter, Link } from "react-router-dom";

const Events = () => {
  return (
    <div className="event">
      <div className="gallary">
        <BrowserRouter>
          <Link to={"https://sdgs.un.org/conferences/ocean2025"}>
            <img src={gallery_1} alt="UN ocean conference" />{" "}
          </Link>
        </BrowserRouter>
        <BrowserRouter>
          <Link to="https://sdgs.un.org/events/communities-ocean-action-principals-meeting-54932">
            <img
              src={gallery_2}
              alt="Communities of ocean action principal's meeting"
            />
          </Link>
        </BrowserRouter>
        <BrowserRouter>
          <Link to="https://sdgs.un.org/events/bridging-ambition-gap-future-we-want-through-climate-and-sdgs-synergy-55317">
            <img
              src={gallery_3}
              alt="Bridge the ambition gap for the future we want through climate and SDG's synergy"
            />
          </Link>
        </BrowserRouter>
        <BrowserRouter>
          <Link to="https://sdgs.un.org/events/keeping-sdg-promise-pathways-acceleration-55952">
            <img
              src={gallery_4}
              alt="Keeping the SDG promise pathways for acceleration"
            />
          </Link>
        </BrowserRouter>
      </div>
      <BrowserRouter>
        <Link to ="https://sdgs.un.org/events">
      <button className="btn dark-btn">
        see more here <img src={white_arrow} alt="" />
      </button>
        </Link>
      </BrowserRouter>
    </div>
  );
};

export default Events;
