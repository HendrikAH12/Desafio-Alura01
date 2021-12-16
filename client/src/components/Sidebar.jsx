import { useState, useEffect } from "react";
import styled from "styled-components";
import codeIcon from "../assets/CodeIcon.png";
import communityIcon from "../assets/CommunityIcon.png";
import { Link } from "react-router-dom";
import "../app.css";

const Container = styled.div`
    flex: 1;
    top: 128px;
    height: calc(100vh - 160px);
    background-color: #051D3B;
`;

const Title = styled.h3`
    color: #FFFFFF;
    font-size: 12px;
    font-style: normal;
    font-weight: normal;
    letter-spacing: 0.4em;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

const MenuContainer = styled.div`
    display: flex;
`;

const MenuIconContainer = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 16px;
    margin-bottom: 16px;
    background-color: ${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const MenuIcon = styled.img`
    opacity: ${(props) => props.opacity};
`;

const MenuInfo = styled.h3`
    color: ${(props) => props.color};
    opacity: ${(props) => props.opacity};
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    font-weight: 400;
    padding: 16px;
    cursor: pointer;
`;

const Sidebar = (active) => {
    const [backgroundCode, setBackgroundCode] = useState("rgba(80, 129, 251, 0.16)");
    const [opacityCode, setOpacityCode] = useState("0.56");
    const [backgroundCommunity, setBackgroundCommunity] = useState("rgba(80, 129, 251, 0.16)");
    const [opacityCommunity, setOpacityCommunity] = useState("0.56");

    useEffect(() => {
        if (active.active === "1") {
            setBackgroundCode("#5081FB");
            setOpacityCode("1");
        } else {
            setBackgroundCommunity("#5081FB");
            setOpacityCommunity("1");
        }
    }, [active]);

    return (
        <Container>
            <Title>Menu</Title>
            <Link to="/project/create" className="link">
                <MenuContainer>
                    <MenuIconContainer color={backgroundCode}>
                        <MenuIcon opacity={opacityCode} src={codeIcon} alt="" />
                    </MenuIconContainer>
                    <MenuInfo color="#FFFFFF" opacity={opacityCode}>Editor de código</MenuInfo>
                </MenuContainer>
            </Link>

            <Link to="/projects" className="link">
                <MenuContainer>
                    <MenuIconContainer color={backgroundCommunity}>
                        <MenuIcon opacity={opacityCommunity} src={communityIcon} alt="" />
                    </MenuIconContainer>
                    <MenuInfo color="#FFFFFF" opacity={opacityCommunity}>Comunidade</MenuInfo>
                </MenuContainer>
            </Link>
        </Container>
    );
}

export default Sidebar;
