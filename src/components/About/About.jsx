import Title from 'components/Title/Title';
import Button from 'components/UI/Button/Button';
import React from 'react';
import './About.scss';
import me from '../../assets/img/IMG_20221026_202047.jpg';
const About = () => {
  return (
    <section className="section about">
      <Title
        title={'ABOUT ME'}
        subtitle={'Here you will find more information about me.'}
      />
      <div className="about__row">
        <div className="wow animate__animated animate__fast animate__fadeInUp about__left-coll">
          <h3 className=" about__block-title">Me,myself & i</h3>
          <p className="about__text text">
            Hello I have been programming for over a year. During this time, I
            have mastered HTML & CSS (block, responsive, responsive layout), JS
            (ES6 +, context, promises, closure). I am currently learning React
            and want to work with it in the future. I am open to interesting
            projects in the position of Frontend.
          </p>
          <Button>Contact</Button>
        </div>
        <div className="about__rigth-coll">
          <div className=" wow animate__animated animate__bounceIn about__me-photo">
            <img src={me} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
