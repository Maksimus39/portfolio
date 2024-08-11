import React from 'react';
import styled from "styled-components";
import quotationMarks from "../../assets/images/“.svg"

export const Slider = () => {
    return (
        <StylerSlider>
            <Slide/>
            <img src={quotationMarks} alt=""/>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,
                mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
                tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti
                sociosqu ad litora torquent
            </Text>
            <Slide/>
        </StylerSlider>
    );
};

const StylerSlider = styled.div`
    max-width: 500px;
`
const Slide = styled.div`
 
`

const Text = styled.p`
    text-align: center;
`

