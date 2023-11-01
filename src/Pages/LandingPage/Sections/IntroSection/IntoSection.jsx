import React from "react";
import css from "./IntroSection.module.css";
import BlackButton from "../../../../Components/BlackButton/BlackButton"
import OutlinedBtn from "../../../../Components/OutlinedButton/OutlinedBtn"
import background from "../../../../Assets/background.jpg"

const IntoSection = () => {
  return (
    <div className={css.container}>
      <div className={css.ImageSection}>
      <img src={background} alt="back"/>
      </div>
      <div className={css.IntroStatement}>
        <div className={css.openingStatement}>
          <h1>
            Empowering Wildfire
            <br />
            Response Teams with
            <br />
            Advanced Technology
          </h1>
        </div>
        <div className={css.moreDetails}>
          <span>
            Welcome to Fire Professionals, Where we provide exceptional
            technology solutions to enhance wildfire detection, confirmation,
            monitoring, and alerting. Our mission is to give wildfire response
            teams the added edge they need in combating wildfires.
          </span>
          <div className={css.navButtons}>
            <div className={css.blackButton}>
            <BlackButton title={'Learn More'}/>
            </div>
            <div className={css.outlinedBtn}>
            <OutlinedBtn title={'Sign Up'}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntoSection;
