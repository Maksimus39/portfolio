import React from 'react';
import styled from "styled-components";

export const Work = () => {
    return (
        <StyledWork>
            <Rectangle>
                <WorkTitle>Project Title</WorkTitle>
                <WorkDescription>Description of the project.</WorkDescription>
            </Rectangle>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    margin: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Rectangle = styled.div`
    padding: 20px;
    background-color: white;
`;

const WorkTitle = styled.h3`
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 10px;
`;

const WorkDescription = styled.p`
    font-size: 1rem;
    color: #666;
`;