import styled from "styled-components";
import logo from "../assets/Logo.png";
import avatar from "../assets/Photo.png";

const Container = styled.div`
    height: 128px;
    color: #FFFFFF;
    background-color: #051D3B;
`;

const Wrapper = styled.div`
    padding: 32px;
    display: flex;
    aligm-items: center;
    justify-content: space-between;
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
`;

const Input = styled.input`
    box-sizing: border-box;
    border: none;
    border-radius: 8px;
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

    &:hover {
        background-color: rgba(255, 255, 255, 0.08);
    }
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

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <img style={{cursor: "pointer"}} src={logo} alt=""/>
                </Left>

                <Center>
                    <Input placeholder="Busque por algo" />
                </Center>

                <Right>
                    <UserContainer>
                        <Avatar src={avatar} alt=""/>
                        <Username>Harry</Username>
                    </UserContainer>
                </Right>
            </Wrapper>
        </Container>
    );
}

export default Navbar;
