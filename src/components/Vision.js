import React from "react";
import css from "../styles/Vision.module.css";
import Glider from "react-glider";
import "glider-js/glider.min.css";

export default function Vision() {
  return (
    <section className={css.section}>
      <div className="container">
        VISION
        <Glider 
        draggable 
        hasArrows 
        hasDots 
        slidesToShow={1} slidesToScroll={1}>
          <div>1</div>
          <div>2</div>
          <div>3</div>

        </Glider>
      </div>
    </section>
  );
}
