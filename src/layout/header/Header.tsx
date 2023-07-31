import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";

const mainMenuItems = ['Home', 'Skills', 'Works', 'Testimony', 'Contact'];
export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Menu menuItems={mainMenuItems}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: greenyellow;
  display: flex;
  justify-content: space-between;
`;