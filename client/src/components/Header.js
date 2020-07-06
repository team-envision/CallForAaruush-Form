import React from 'react';

export default function Header() {
  const handleScrollToElement = (event) => {
    window.scroll({
      top: 3000,
      left: 100,
      behavior: 'smooth',
    });
  };

  return (
    <div className='head'>
      <div className='container'>
        <div className='heading'>
          <h3>CALL FOR</h3>
          <h1>AARUUSH</h1>
          <h6>1st july - 15th july</h6>
          <button className='button-apply' onClick={handleScrollToElement}>
            Apply Now
          </button>
        </div>
        <div className='about'>
          <h5>About AARUUSH</h5>
          <p>
            Aaruush is the student-run, official Techno-Management Fest of SRM
            Institute of Science and Technology. Team Aaruush is an
            ever-expanding family of talented individuals, who are on the path
            to becoming pioneers in their own fields. Aaruush comprises of 14
            domains, which provide a platform to showcase and innovate a
            multitude of ideas which range from Architecture to Medical
            Sciences, Entrepreneurship to Robotics and Game Development to
            Aero-modeling. The cohesive structure which connects the Domains,
            are the 12 committees of Aaruush alongside Team Envision and Team
            Outreach. Aaruush organizes several workshops, expos, conferences,
            luminary hours and non-profit initiatives to facilitate the general
            progress of human society.
          </p>
        </div>
      </div>
    </div>
  );
}
