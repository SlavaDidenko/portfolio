import Title from 'components/Title/Title';
import Button from 'components/UI/Button/Button';
import React from 'react';
import './Skills.scss'
const Skills = () => {
  const arrSkills = ["HTML","CSS", "SASS", "SCSS", "JavaScript", "React", "Redux", "Redux-thunk", "Tailwind CSS", "Ant-Design", "Axios", "REST", "API", "Webpack", "BEM", "Vite", "Git"]
  return (
    <section className="section skills">
      <Title
        title={'My Skills'}
        subtitle={'Here you will find more information , what I do and my current skills, mainly in programming and technology'}
      />
      <div className="skills__row">
        <div className="wow animate__animated animate__bounceInLeft skills__left-coll">
          <h3 className="skills__block-title">Skills & Experiences</h3>
          <p className="skills__text text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis tincidunt sapien, ut lacinia odio dapibus eget. Curabitur at tempus nunc, vel consectetur nibh. Duis ut orci velit. Pellentesque fringilla, metus ut gravida egestas, tortor elit posuere justo, id sagittis sapien ligula a orci. Mauris tempor, purus at varius ullamcorper, metus lectus cursus magna, a molestie orci diam in libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum laoreet quis risus eget posuere. Aliquam sed elementum tellus.
          </p>
          <a className='skills__link' href='#'>Visit my linkedin or just contact me</a>
        </div>
        <div className="wow animate__animated animate__bounceInRight skills__rigth-coll">
          <h3 className="skills__block-title">My skills</h3>
          <ul className='skills__list'>
            {arrSkills.map((skill, index) => (
              <li key={index} className='skills__list-item'>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
