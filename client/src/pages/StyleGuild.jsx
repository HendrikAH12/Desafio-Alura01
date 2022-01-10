import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StyleGuildContent from "../components/StyleGuildContent";

const Container = styled.div`
    display: flex;
    padding: 0px 32px 32px 32px;
`;

const StyleGuild = () => {
    return (
        <div style={{ backgroundColor: "#051D3B" }}>
            <Navbar />
            <Container>
                <Sidebar />
                <StyleGuildContent />
            </Container>
        </div>
    )
};

export default StyleGuild;
