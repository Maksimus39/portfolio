import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo_1.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {EmailMe} from "../../../components/emaillMe/EmailMe";
import {DownloadCV} from "../../../components/downloadCV/DownloadCV";


export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi! I am Maxim Minakov</span>
                    <MainTitle>A Web Developer</MainTitle>
                    <EmailMe/>
                    <DownloadCV/>
                </div>
                <Photo src={photo} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};
const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #d7d2d2;
`
const Photo = styled.img`
    width: 721px;
    height: 743px;
    object-fit: cover;
`
const MainTitle = styled.h1``

