import styled from "styled-components";
import Project from "./Project";

const Container = styled.div`
    background-color: #051D3B;
    display: flex;
    flex: 3;
    flex-wrap: wrap;
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
