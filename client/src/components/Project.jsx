import styled from "styled-components";
import avatar from "../assets/Photo.png";
import messageIcon from "../assets/MessageIcon.png";
import heartIcon from "../assets/HeartIcon.png";

const Container = styled.div`
    flex: 1;
    min-width: 520px;
    height: 464px;
    display: flex;
    background-color: rgba(0, 0, 0, 0.16);
    color: #FFFFFF;
    border-radius: 8px;
    flex-direction: column;
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
    padding: 24px 24px 32px 24px;
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
    margin-bottom: 32px;
    opacity: 0.8;
`;

const InfoSubContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
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
    return (
        <Container>
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

            <InfoContainer>
                <InfoTitle>Título do projeto</InfoTitle>
                <InfoDesc>Essa é a descrição do meu projeto.</InfoDesc>
                <InfoSubContainer>
                    <Left>
                        <img style={{marginRight: "10px"}} src={messageIcon} alt="" />
                        9
                        <img style={{marginRight: "10px", marginLeft: "18px"}} src={heartIcon} alt="" />
                        9
                    </Left>
                    
                    <Right>
                        <Avatar src={avatar} alt="" />
                        <Username>@Harry</Username>
                    </Right>
                </InfoSubContainer>
            </InfoContainer>
        </Container>
    );
}

export default Project;
