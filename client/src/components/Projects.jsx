import styled from "styled-components";
import Project from "./Project";
import { tablet } from "../responsive.js";

const Container = styled.div`
    background-color: #051D3B;
    display: flex;
    flex: 3;
    flex-wrap: wrap;
    gap: 24px;
    ${tablet({ flex: 1 })};
`;

const Projects = () => {
    return (
        <Container>
            <Project color="#9AFF6B" />
            <Project color="#6B83FF" />
            <Project color="#FFC46B" />
            <Project color="#FF6BCD" />
        </Container>
    );
}

export default Projects;
