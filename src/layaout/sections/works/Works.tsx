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

            <SektionAge>
                4 +
                Years
                Experience
                Working
            </SektionAge>

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
`
const SectionTitle = styled.h2``
const SektionAge = styled.h2`
`