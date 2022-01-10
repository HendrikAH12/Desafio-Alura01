import styled from "styled-components";
import logo from "../assets/Logo.png";
import avatar from "../assets/Photo.png";
import searchIcon from "../assets/SearchIcon.png";
import menuIcon from "../assets/MenuIcon.png";
import { tablet, mobile } from "../responsive";

const Container = styled.div`
    color: #FFFFFF;
    background-color: #051D3B;
`;

const Wrapper = styled.div`
    padding: 32px;
    display: flex;
    aligm-items: center;
    justify-content: space-between;
    ${tablet({ padding: "43px 32px 32px 32px" })};
    ${mobile({ padding: "20px 16px 20px 16px" })};
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Center = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    ${tablet({ flex: 8 })};
    ${mobile({ display: "none" })};
`;

const Input = styled.input`
    box-sizing: border-box;
    border: none;
    border-radius: 8px;
    color: #FFFFFF;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    background-color: rgba(255, 255, 255, 0.16);
    padding: 16px 14px;
    width: 100%;

    &:hover {
        background-color: rgba(255, 255, 255, 0.24);
    }

    &::placeholder {
        color: #FFFFFF;
        opacity: 0.64;
    }
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`;

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    border-radius: 8px;
    margin-left: 40px;

    &:hover {
        background-color: rgba(255, 255, 255, 0.08);
    }
    ${tablet({ display: "none" })};
`;

const Avatar = styled.img`
    width: 32px;
    height: 32px;
    padding: 12px 4px 12px 12px;
    cursor: pointer;
`;

const Username = styled.span`
    padding: 16px 16px 16px 4px;
    margin-left: 8px;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    display: none;
    align-items: center;
    border-radius: 16px;
    cursor: pointer;
    padding: 16px;

    &:hover {
        background-color: rgba(80, 129, 251, 0.08);
    }

    &:active {
        background-color: rgba(80, 129, 251, 0.16);
    }

    ${mobile({ display: "flex" })};
`;

const MenuContainer = styled.div`
    display: none;
    align-items: center;
    border-radius: 16px;
    padding: 14px;
    cursor: pointer;

    &:hover {
        background-color: rgba(80, 129, 251, 0.08);
    }

    &:active {
        background-color: rgba(80, 129, 251, 0.16);
    }

    ${tablet({ display: "flex", marginLeft: 40 })};
    ${mobile({ display: "flex", marginLeft: 0 })};
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <img style={{cursor: "pointer", marginRight: "40px"}} src={logo} alt=""/>
                </Left>

                <Center>
                    <Input placeholder="Busque por algo" />
                </Center>

                <Right>
                    <UserContainer>
                        <Avatar src={avatar} alt=""/>
                        <Username>Harry</Username>
                    </UserContainer>

                    <SearchContainer>
                        <img src={searchIcon} alt="" />
                    </SearchContainer>

                    <MenuContainer>
                        <img src={menuIcon} alt="" />
                    </MenuContainer>
                </Right>
            </Wrapper>
        </Container>
    );
}

export default Navbar;
