import styled from "styled-components";
import ProjectContent from "../components/ProjectContent";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { tablet, mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    padding: 0px 32px 32px 32px;
    background-color: #051D3B;
    ${tablet({ padding: "0px 32px 40px 32px" })};
    ${mobile({ padding: "0px 16px 40px 16px" })};
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
