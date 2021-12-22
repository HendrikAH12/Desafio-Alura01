import styled from "styled-components";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Sidebar from "../components/Sidebar";
import { tablet, mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    padding: 0px 32px 32px 32px;
    background-color: #051D3B;
    ${tablet({ padding: "0px 32px 40px 32px" })};
    ${mobile({ padding: "0px 16px 40px 16px" })};
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
