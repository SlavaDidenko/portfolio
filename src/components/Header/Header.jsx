import React, { useEffect, useState } from 'react';
import './Header.scss';
import { Squeeze as Hamburger, Squeeze } from 'hamburger-react';
import { NavLink } from 'react-router-dom';
import useToggle from 'hooks/useToggle';
import { useRef } from 'react';
const navArr = ['Home', 'About', 'Skills', 'Projects'];
const Header = () => {
  const { isOpen, toggle, close } = useToggle();
  const header = useRef();
  const [sticky, setSticky] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 400 ? 'is-fixed' : '';
    setSticky(stickyClass);
  };

  return (
    <header ref={header} className={`header ${sticky}`}>
      <div ref={header} className="container header__wrapper">
        <nav ref={header} className="header__nav">
          <ul className={`header__nav-list ${isOpen && 'active'}`}>
            {navArr.map((el, index) => (
              <li className="header__nav-item" key={index}>
                <NavLink
                  to={`/${el.toLowerCase()}`}
                  className="header__nav-link"
                >
                  {el}
                </NavLink>
              </li>
            ))}
          </ul>
          <Squeeze
            color="#fff4b9"
            onToggle={() => toggle()}
            duration={0.2}
          ></Squeeze>
        </nav>
      </div>
    </header>
  );
};

export default Header;
