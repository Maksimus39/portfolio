import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>Developer and Designer, specialized in
                UI/UX and Web Developer
            </SectionTitle>

            <SectionAge>
                4 +
                Years
                Experience
                Working
            </SectionAge>

            <FlexWrapper>
                <Work/>
                <Work/>
                <Work/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: blueviolet;
    padding: 20px;
`
const SectionTitle = styled.h2`
    font-size: 2rem;
    color: white;
    margin-bottom: 10px;
`
const SectionAge  = styled.h3`
    font-size: 1.5rem;
    color: white;
    margin-bottom: 20px;
`