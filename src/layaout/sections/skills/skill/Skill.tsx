import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";

type SkillProps = {
    iconID: string
    title: string
}
export const Skill = (props: SkillProps) => {
    return (
        <StyledSkill>
            <Icon iconID={props.iconID}/>
            <SkillTitle>{props.title}</SkillTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 33%;
    align-items: center;
    margin: 10px;
`
const SkillTitle = styled.h3`
    text-align: center;
`
