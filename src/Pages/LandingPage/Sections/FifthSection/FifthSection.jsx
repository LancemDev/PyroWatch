import React from "react";
import css from "./FifthSection.module.css";
import { MidTexts } from "../FourthSection/list";

const FifthSection = () => {
  const ImageBox = ({ img }) => {
    return <div className='w-full h-72'>
      <img src={img} className="w-full h-full object-cover" alt="" />
    </div>;
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
          {
            MidTexts.map((item)=>(
              <ImageBox 
                img={item.images[0]}
              />
            ))
          }

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
            ™
              <h4>PYROWATCH</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
