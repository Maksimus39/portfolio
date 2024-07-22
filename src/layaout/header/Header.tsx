import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {ContactMe} from "../../components/contaktMe/ContactMe";

const items = ['Home', 'About', 'Services']

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={items}/>
            <ContactMe/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: cyan;
    display: flex;
    justify-content: space-between;
`