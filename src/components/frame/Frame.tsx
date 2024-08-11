import React from 'react';
import styled from "styled-components";

type FrameProps = {
    title: string;
    text: string;
}

export const Frame = ({title, text}: FrameProps) => {
    return (
        <StyledFrame>
            <Title>{title}</Title>
            <TitleProgress>{text}</TitleProgress>
        </StyledFrame>
    );
};

const StyledFrame = styled.div`
    width: 164px;
    height: 142px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
`;

const Title = styled.h3`
    margin: 0;
    font-size: 16px;
`;

const TitleProgress = styled.h3`
    margin: 0;
    font-size: 16px;
`;

export default Frame;