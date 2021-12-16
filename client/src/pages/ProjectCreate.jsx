import styled from "styled-components";
import ProjectContent from "../components/ProjectContent";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Container = styled.div`
    display: flex;
    padding: 0px 32px 32px 32px;
    background-color: #051D3B;
`;

const ProjectCreate = () => {
    return (
        <>
            <Navbar />
            <Container>
                <Sidebar />
                <ProjectContent />
            </Container>
        </>
    );
}

export default ProjectCreate;
