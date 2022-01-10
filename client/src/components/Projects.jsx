import { useState, useEffect } from "react";
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
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("ProjectList") === null) localStorage.setItem("ProjectList", JSON.stringify([]));
        setProjects(JSON.parse(localStorage.getItem("ProjectList")));
    }, []);

    return (
        <Container>
            {projects.map((item) => <Project key={item.id} color={item.color} content={item.content} title={item.title} desc={item.desc} />)}
        </Container>
    );
}

export default Projects;
