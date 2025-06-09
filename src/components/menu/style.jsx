
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1.2rem;
  background-color: #1a1a1a;
  color: white;
  position: relative;
`;

export const Avatar = styled.img`
  border-radius: 6px;
  width: 40px;
  height: 40px;
`;

export const MenuToggle = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  width: 35px;
  height: 35px;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;
  padding: 0;
  z-index: 10;

  @media (min-width: 768px) {
    display: none;
  }

  span {
    height: 3px;
    width: 100%;
    background: white;
    border-radius: 3px;
    transition: all 0.3s ease;
  }

  &.open span:nth-child(1) {
    transform: rotate(45deg) translate(7.5px, 7.5px);
  }

  &.open span:nth-child(2) {
    opacity: 0;
  }

  &.open span:nth-child(3) {
    transform: rotate(-45deg) translate(7.5px, -7.5px);
  }
`;


export const NavLinks = styled.nav`
  height: ${props => props.height}px;
  overflow: hidden;
  transition: height 0.3s ease;

  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  left: 0;
  background: #1a1a1a;
  width: 100%;
  gap: 1rem;
  padding: 0 1rem;

  @media (min-width: 768px) {
    height: auto;
    overflow: visible;
    position: static;
    flex-direction: row;
    background: none;
    width: auto;
    padding: 0 1rem;
    gap: 1.5rem;
    margin-left: auto;
    transition: none;
  }
`;

export const NavItemsWrapper = styled.div`
  position: relative;
  padding-block: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  z-index: 3;
`;

export const NavItem = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding-bottom: 4px;

  &.active {
    border-bottom: 2px solid #1e90ff;
  }

  &:hover {
    text-decoration: underline;
  }
`;


export const ThemeButton = styled.button`
  background: none;
  border: 1px solid white;
  color: white;
  border-radius: 6px;
  padding: 0.4rem 0.6rem;
  cursor: pointer;
`;
