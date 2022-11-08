import Title from 'components/Title/Title';
import Button from 'components/UI/Button/Button';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import { useRef } from 'react';
import './Projects.scss';
import CardProject from './CardProject/CardProject.jsx';
import { RingLoader } from 'react-spinners';

const Projects = () => {
  const [listWorks, setListWorks] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const getListWorks = async () => {
      try {
        const response = await fetch(
          'https://63584168c27556d2893ad9c8.mockapi.io/api/portfolio/projects'
        );
        const result = await response.json();
        setLoading(false);
        setListWorks(result);
      } catch (error) {}
    };
    getListWorks();
  }, []);
  return (
    <section className="section projects">
      <Title
        title={'Projects'}
        subtitle={'Here you can find my latest projects that I have created'}
      />
      <div className="projects__wrapper">
        {listWorks.length ? (
          listWorks.map((item, index) => (
            <CardProject
              link={item.link}
              key={index}
              title={item.title}
              src={item.src}
              index={[index, listWorks.length]}
            />
          ))
        ) : (
          <RingLoader
            size={100}
            color={'#fff4b9'}
            loading={loading}
          ></RingLoader>
        )}
      </div>
      <div className="projects__wrapper-btn">
        <Button>View More</Button>
      </div>
    </section>
  );
};

export default Projects;
