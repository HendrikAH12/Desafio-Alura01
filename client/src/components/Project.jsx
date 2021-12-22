import { useState } from "react";
import styled from "styled-components";
import avatar from "../assets/Photo.png";
import messageIcon from "../assets/MessageIcon.png";
import { tablet, mobile } from "../responsive";

const Center = styled.div`
    padding: 24px;
    background-color: rgba(0, 0, 0, 0.16);
    border-radius: 0px 0px 8px 8px;
`;

const Bottom = styled.div`
    padding: 0px 32px 32px 24px;
    border-radius: 0px 0px 8px 8px;
`;

const InfoSubContainer = styled.div`
    display: flex;
    visibility: hidden;
    justify-content: space-between;
    margin-top: 8px;
`;

const Container = styled.div`
    flex: 1;
    min-width: 520px;
    display: flex;
    color: #FFFFFF;
    border-radius: 8px;
    flex-direction: column;

    &:hover ${Center} {
        border-radius: 0px;
    }

    &:hover ${Bottom} {
        background-color: rgba(0, 0, 0, 0.16);
    }

    &:hover ${InfoSubContainer} {
        visibility: visible;
    }
    ${tablet({ minWidth: "510px" })};
    ${mobile({ minWidth: "340px" })};
`;

const Top = styled.div`
    background-color: rgba(0, 0, 0, 0.16);
`;

const TextAreaContainer = styled.div`
    display: flex;
    width: 100%;
    background-color: ${(props) => props.color};
    height: 288px;
    border-radius: 8px;
`;

const TextAreaSubContainer = styled.div`
    width: 100%;
    background-color: #141414;
    box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.24);
    border-radius: 8px;
    margin: 24px;
    padding: 12px;
    align-items: center;
    justify-content: center;
`

const ColorContainer = styled.div`
    display: flex;
`;

const Color = styled.div`
    width: 9px;
    height: 9px;
    background-color: ${(props) => props.color};
    border-radius: 50%;
    margin: 0px 6px 12px 0px;
`;

const TextArea = styled.textarea`
    border: none;
    width: 100%;
    background-color: #141414;
    resize: none;
    font-family: Roboto Mono;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    color: #FFFFFF;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const InfoTitle = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 21px;
    margin-bottom: 8px;
`;

const InfoDesc = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    opacity: 0.8;
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const IconContainer = styled.div`
    display: flex;
    padding: 11.5px 8px 11.5px 10px;
    border-radius: 16px;

    &:hover {
        background-color: rgba(255, 255, 255, 0.08);
    }

    &:active {
        background-color: rgba(255, 255, 255, 0.16);
    }
`;

const Icon = styled.img`
    margin-right: 10px;
`;

const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Username = styled.span`
    margin-left: 8px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    cursor: pointer;
`;

const Avatar = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`;

const Project = (background) => {
    const [heartColor, setHeartColor] = useState("white");
    
    const activeHeart = () => {
        if (heartColor === "white") setHeartColor("#F65151");
        else setHeartColor("white");
    }

    return (
        <Container>
            <Top>
                <TextAreaContainer color={background.color}>
                    <TextAreaSubContainer>
                        <ColorContainer>
                            <Color color="#FF5F56" />
                            <Color color="#FFBD2E" />
                            <Color color="#27C93F" />
                        </ColorContainer>
                        <TextArea rows="12" disabled />
                    </TextAreaSubContainer>
                </TextAreaContainer>
            </Top>

            <InfoContainer>
                <Center>
                    <InfoTitle>Título do projeto</InfoTitle>
                    <InfoDesc>Essa é a descrição do meu projeto.</InfoDesc>
                </Center>

                <Bottom>
                    <InfoSubContainer>
                        <Left>
                            <IconContainer>
                                <Icon src={messageIcon} alt="" />
                                9
                            </IconContainer>

                            <IconContainer onClick={activeHeart}>
                                <svg style={{marginRight: "10px"}} width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.0587 1.44659C15.9181 -0.377597 12.7346 -0.0494787 10.7698 1.97783L10.0003 2.77078L9.23077 1.97783C7.26987 -0.0494787 4.08243 -0.377597 1.94185 1.44659C-0.51123 3.5403 -0.640134 7.29804 1.55514 9.56752L9.11359 17.3721C9.60186 17.876 10.3948 17.876 10.8831 17.3721L18.4415 9.56752C20.6407 7.29804 20.5118 3.5403 18.0587 1.44659Z" fill={heartColor}/>
                                </svg>
                                9
                            </IconContainer>
                        </Left>
                        
                        <Right>
                            <Avatar src={avatar} alt="" />
                            <Username>@Harry</Username>
                        </Right>
                    </InfoSubContainer>
                </Bottom>
            </InfoContainer>
        </Container>
    );
}

export default Project;
