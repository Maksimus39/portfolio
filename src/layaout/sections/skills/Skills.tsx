import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <FlexWrapper wrap={"nowrap"} justify={"space-between"}>
                <Skill iconID={"HTML"} title={"HTML"}/>
                <Skill iconID={"CSS"} title={"CSS"}/>
                <Skill iconID={"GitHub"} title={"GitHub"}/>
                <Skill iconID={"logoStyledComponents"} title={"StyledComponents"}/>
                <Skill iconID={"logoTS"} title={"TypeScript"}/>
                <Skill iconID={"React"} title={"React"}/>
                <Skill iconID={"Redux"} title={"Redux"}/>
            </FlexWrapper>
        </StyledSkills>
    )
}

const StyledSkills = styled.section`
    background-color: #8be7ea;
    min-height: 100vh;
`