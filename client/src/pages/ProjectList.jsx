import styled from "styled-components";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Sidebar from "../components/Sidebar";

const Container = styled.div`
    display: flex;
    padding: 0px 32px 32px 32px;
    background-color: #051D3B;
`;

const ProjectList = () => {
    return (
        <>
            <Navbar />
            <Container>
                <Sidebar />
                <Projects />
            </Container>
        </>
    );
}

export default ProjectList;