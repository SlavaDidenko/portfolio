import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from 'react-transition-group';

const defaultStyle = {
  title: {
    transition: `all 500ms ease`,
    transform: `translateX(-150px)`,
    opacity: 0,
  },
  btn: {
    transition: `all  200ms ease-in-out`,
    transform: 'scale(0)',
  },
};

const transitionStyles = {
  title: {
    entering: {
      opacity: 1,
      transform: `translateX(0)`,
    },
    entered: {
      opacity: 1,
      transform: `translateX(0)`,
    },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  },
  btn: {
    entering: {
      transform: 'scale(0)',
    },
    entered: {
      transform: 'scale(1) rotateZ(720deg)',
    },
  },
};

const CardProject = ({ title, src, index, link }) => {
  const nodeRef = useRef(null);
  const [inProp, setInProp] = useState(false);
  const nodeRef2 = useRef(null);
  const [inProp2, setInProp2] = useState(false);
  return (
    <div
      className={`projects__card card projects__card--${
        index[0] % 2 ? 'left' : 'right'
      }`}
    >
      <Link
        className=' projects__link-card'
        to={`/projects/${link}`}
        onMouseLeave={() => {
          setInProp(false);
          setInProp2(false);
        }}
        onMouseMove={() => {
          setInProp(true);
          setInProp2(true);
        }}
      >
        <div className=" projects__wrapper-img">
          <div className="projects__wrapper-title">
            <Transition nodeRef={nodeRef} in={inProp}>
              {state => (
                <h3
                  ref={nodeRef}
                  style={{
                    ...defaultStyle.title,
                    ...transitionStyles.title[state],
                  }}
                  className="projects__title"
                >
                  {title}
                </h3>
              )}
            </Transition>
          </div>
          <div className="monochome"></div>
          <img src={src}></img>
        </div>
        <Transition nodeRef={nodeRef2} in={inProp2}>
            {state => (
              <Link
                ref={nodeRef}
                style={{
                  ...defaultStyle.btn,
                  ...transitionStyles.btn[state],
                }}
                className="projects__btn"
              >
                <svg width="120" height="121" fill="none">
                  <rect
                    y=".853"
                    width="120"
                    height="120"
                    rx="60"
                    fill="#FCF3EA"
                  />
                  <path
                    d="M76 45.853a1 1 0 0 0-1-1h-9a1 1 0 0 0 0 2h8v8a1 1 0 0 0 2 0v-9ZM45.707 76.56l30-30-1.414-1.414-30 30 1.414 1.414Z"
                    fill="#000"
                  />
                </svg>
              </Link>
            )}
          </Transition>
      </Link>
      <span className="projects__number">{`${index[0] + 1}/${index[1]}`}</span>
    </div>
  );
};

export default CardProject;
