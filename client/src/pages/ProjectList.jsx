import styled from "styled-components";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Sidebar from "../components/Sidebar";
import { tablet, mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    padding: 0px 32px 32px 32px;
    ${tablet({ padding: "0px 32px 40px 32px" })};
    ${mobile({ padding: "0px 16px 40px 16px" })};
`;

const ProjectList = () => {
    return (
        <div style={{ backgroundColor: "#051D3B" }}>
            <Navbar />
            <Container>
                <Sidebar />
                <Projects />
            </Container>
        </div>
    );
}

export default ProjectList;
