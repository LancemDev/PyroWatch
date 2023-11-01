import React from "react";
import css from "./FifthSection.module.css";

const FifthSection = () => {
  const ImageBox = () => {
    return <div className={css.ImageSection}></div>;
  };
  return (
    <div className={css.container}>
      <div className={css.sections}>
        <div className={css.header}>
          <h2>Technology Showcase</h2>
          <span>
            Transforming wildfire management with cutting-edge technology
          </span>
        </div>
        <div className={css.images}>
          <ImageBox />
          <ImageBox />
          <ImageBox />
          <ImageBox />
        </div>
        <div className={css.testimonial}>
          <h2>*****</h2>
          <h4>
            The technology provided by Fire Professionals has revolutionalized
            our wildfire response efforts. It has greatly enhanced our ability
            to detectm confirm, monito and alert, giving us a significant
            advantage in combating wildfires
          </h4>
          <div className={css.userRow}>
            <div className={css.userProfile}>
                <div className={css.avator}></div>
                <div className={css.username}>
                    <h3>John Doe</h3>
                    <span>Fire Chief,ABC Company</span>
                </div>
            </div>
            <div className={css.divider}></div>
            <div className={css.companyLogo}>
                *
                <h4>Webflow</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
