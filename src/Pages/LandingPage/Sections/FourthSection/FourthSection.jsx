import React from "react";
import css from "./FourthSection.module.css";
import MediumSection from "../../../../Components/MediumSection/MedimuSection";

const FourthSection = () => {
  return (
    <div className={css.container}>
    <div className={css.sections}>
    <MediumSection tagline={'Empower'} heading={'Streamlined Technology for Effective Wildfire Management'} description={'Our Organization provides cutting-edge technology and services to empower wildfire response teams in the detection, confirmation, monitoring, and alerting of wildfires. With our Solutions, you gain an added edge in combating wildfires and protecting lives and property.'} outlinedBtn={'Learn More'} navBtn={'Sign Up'} />
    <MediumSection tagline={'Innovate'} heading={'Efficient Wildfire Detection and Monitoring'} description={'Our Organization provides cutting-edge technology and services to empower wildfire response teams in the detection, confirmation, monitoring, and alerting of wildfires. With our Solutions, you gain an added edge in combating wildfires and protecting lives and property.'} outlinedBtn={'Learn More'} navBtn={'Sign Up'} />
    <MediumSection tagline={'Empower'} heading={'Streamlined Technology for Effective Wildfire Management'} description={'Our Organization provides cutting-edge technology and services to empower wildfire response teams in the detection, confirmation, monitoring, and alerting of wildfires. With our Solutions, you gain an added edge in combating wildfires and protecting lives and property.'} outlinedBtn={'Learn More'} navBtn={'Sign Up'} />
    <MediumSection tagline={'Empower'} heading={'Streamlined Technology for Effective Wildfire Management'} description={'Our Organization provides cutting-edge technology and services to empower wildfire response teams in the detection, confirmation, monitoring, and alerting of wildfires. With our Solutions, you gain an added edge in combating wildfires and protecting lives and property.'} outlinedBtn={'Learn More'} navBtn={'Sign Up'} />
    </div>
    </div>
  );
};

export default FourthSection;
