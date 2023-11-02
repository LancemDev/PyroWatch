import React from "react";
import css from "./SecondSection.module.css";
import banner_img from './../../../../Assets/fighter.jpg'

const SecondSection = () => {
  return (
    <div className={css.container}>
      <div className={css.sections}>
        <div className={css.statementSection}>
          <h1>
            Empowering Wildfire Response Teams with Exceptional Technology for
            Detection, Confirmation, and Monitoring
          </h1>
          <span>
            Our organization utilizes cutting-edge technology to provide
            wildfire response teams with advanced tools for detecting,
            confirming, and monitoring wildfires. With our innovative solutions,
            you'll have the added edge in combating wildfires and protecting
            communities
          </span>
          <div className={css.rowSection}>
            <div className={css.detection}>
              <h2>Detection</h2>
              <span>
                Our exceptional technology enables accurate and timely detection
                of wildfires,ensuring swift response and containment
              </span>
            </div>
            <div className={css.confirmation}>
              <h2>Confirmation</h2>
              <span>
                Through advanced algorithms, we provide reliable confirmation of
                wildfire incidents, minimizing false alarms
              </span>
            </div>
          </div>
        </div>
        <div className={css.ImageSecion}>
            <img src={banner_img} className="w-10/12 h-75vh object-cover" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
