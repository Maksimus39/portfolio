import React from 'react';
import styled from "styled-components";
import photo2 from '../../../assets/images/photo_2.webp'
import {Slider} from "../../../components/slyder/Slider";
import Frame from "../../../components/frame/Frame";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionAll>
                <Photo2 src={photo2} alt=''/>
                <SliderContainer>
                    <Slider/>
                </SliderContainer>
            </SectionAll>
            <Pagination>
                <span></span>
                <span></span>
            </Pagination>


                <Group>
                    <Frame title={"Satisfaction Clients"} text={"100 %"}/>
                    <Frame title={"Clients On Worldwide"} text={"+ 80"}/>
                    <Frame title={"Projects Done"} text={"743"}/>
                </Group>

        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    min-height: 100vh;
    background-color: darkslategray;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SectionAll = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1197px;
    height: 450px;
    margin-top: 100px;
`

const Photo2 = styled.img`
    width: 300px;
    height: 300px;
    margin-left: 120px;
`

const SliderContainer = styled.div`
    width: 400px;
    margin-left: 20px;
`

const Pagination = styled.div`
    margin-top: 20px;

    span {
        display: inline-block;
        width: 10px;
        height: 20px;
        margin: 5px;
        background-color: rgba(53, 121, 153, 0.87);
    }
`

const Group = styled.div`
    width: 194px;
    height: 450px;
`
