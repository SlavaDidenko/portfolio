import Button from 'components/UI/Button/Button';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Project.scss';

const Project = () => {
  const params = useParams();
  console.log(params.id);

  const [projectInfo, setProjectInfo] = useState();

  useEffect(() => {
    const getListWorks = async () => {
      try {
        const response = await fetch(
          "https://63584168c27556d2893ad9c8.mockapi.io/api/portfolio/building"
        );
        const result = await response.json();
        console.log(result[0][params.id])
        setProjectInfo(result[0][params.id]);
        console.log(result);
      } catch (error) {}
    };
    getListWorks();
  }, []);

  return (
    <div className="project section">
      {projectInfo && (
        <>
          <div className="project__title-wrapper">
            <h1 className="project__title">{projectInfo.title}</h1>
            <p className="project__text text">{projectInfo.text}</p>
          </div>
          <div className="project__block-wrapper">
            <h3 className="project__title-tools">Tools Used</h3>
            <ul className="project__list-tools">
              {projectInfo.tools.map(tool => (
                <li className="project__tool">{tool}</li>
              ))}
            </ul>
          </div>
          <div className="project__img-wrapper">
            <img src={projectInfo.src} alt=""></img>
          </div>
          <div className="wrapper__btn">
            <Button>open project</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Project;
