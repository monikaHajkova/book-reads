import * as React from 'react'
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components'
import Overview from '../../../Home/components/Overview/Overview';

const Theme = {
  colors: {
    bg: `#fff`,
    dark: `#24292e`,
    light: `#EEEEEE`,
    red: `#ff5851`,
  },
  fonts: {
    body: `IBM Plex Sans, sans-serif`,
    heading: `IBM Plex Sans, sans-serif`,
  }
}

const Nav = styled.nav`
  background: ${Theme.colors.dark};
  font-family: ${Theme.fonts.heading};
  color: ${Theme.colors.light};
  display: flex;
  align-items: center;
  a { color: white; text-decoration: none; }`;

const Brand = styled.a`
  margin-left: 1rem;
  font-size: 24px;
  padding-right: 1rem;`;

const Ul = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;`;

const Li = styled.li`
  flex: 0 0 auto;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  color: #999;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  color: #999;
  display: flex;
  font-size: 14px;
  height: 50px;
  justify-content: center;
  line-height: 16px;
  margin: 0 10px ;
  text-decoration: none;
  white-space: nowrap;`;

const Navbar = (props: {
  brand: { name: string; to: string },
  links: Array<{ name: string, to: string }>
}) => {
  const { brand, links } = props;
  const NavLinks: any = () => links.map((link: { name: string, to: string }) => <Li key={link.name}><a href={link.to}>{link.name}</a></Li>);
  return (
    <Nav>
      <Brand href={brand.to}>{brand.name}</Brand>
      <Ul>
        <NavLinks />



      </Ul>
    </Nav >
  )
};


export default Navbar
