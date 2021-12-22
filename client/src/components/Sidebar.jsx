import styled from "styled-components";
import { SidebarData } from "../sidebarData";
import { Link } from "react-router-dom";
import { tablet } from "../responsive.js";

const Container = styled.div`
    flex: 1;
    top: 128px;
    height: calc(100vh - 160px);
    background-color: #051D3B;
    ${tablet({ display: "none" })};
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

const UlContainer = styled.ul`
    list-style: none;
    padding: 0px;
    flex-direction: column;
    margin-right: 40px;
    width: 100%;
`;

const LiContainer = styled.li`
    display: flex;
    margin-bottom: 16px;
    align-items: center;

    & #active {
        background-color: #5081FB;
    }

    & #activeOpacity {
        opacity: 1;
    }

    &:hover #disable {
        background-color: rgba(80, 129, 251, 0.64);
    }

    &:hover #disableOpacity{
        opacity: 1;
    }

    &:active #disable {
        background-color: #5081FB;
    }

    &:active #disableOpacity{
        opacity: 1;
    }
`;

const LiIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 16px;
    background-color: rgba(80, 129, 251, 0.16);
    margin-right: 16px;
`;

const LiIcon = styled.img`
    opacity: 0.56;
`;

const LiTitle = styled.h3`
    color: #FFFFFF;
    opacity: 0.56;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    font-weight: 400;
`;

const Sidebar = () => {
    return (
        <Container>
            <Title>Menu</Title>
            
            <UlContainer>
                {SidebarData.map((val, key) => {
                    return (
                        <Link to={val.link} className="link">
                            <LiContainer key={key}>
                                <LiIconContainer id={window.location.pathname === val.link ? "active" : "disable"}>
                                    <LiIcon id={window.location.pathname === val.link ? "activeOpacity" : "disableOpacity"} src={val.icon} alt="" />
                                </LiIconContainer>

                                <LiTitle id={window.location.pathname === val.link ? "activeOpacity" : "disableOpacity"}>
                                    {val.title}
                                </LiTitle>
                            </LiContainer>
                        </Link>
                    );
                })}
            </UlContainer>
        </Container>
    );
}

export default Sidebar;
