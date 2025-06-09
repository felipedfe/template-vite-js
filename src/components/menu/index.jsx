import React, { useState, useEffect, useRef } from 'react';
import {
  MenuContainer,
  Avatar,
  MenuToggle,
  NavLinks,
  NavItem,
  NavItemsWrapper,
  ThemeButton,
} from './style';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const navRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && navRef.current) {
      setHeight(navRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <MenuContainer ref={menuRef}>
      <Avatar src="https://i.pravatar.cc/40" alt="Avatar" />

      <MenuToggle onClick={() => setIsOpen(!isOpen)} className={isOpen ? 'open' : ''}>
        <span />
        <span />
        <span />
      </MenuToggle>

      <NavLinks ref={navRef} height={height}>
        <NavItemsWrapper>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/blog">Blog</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/newsletter">Newsletter</NavItem>
        </NavItemsWrapper>
      </NavLinks>

      <ThemeButton>☀️</ThemeButton>
    </MenuContainer>
  );
};

export default Menu;