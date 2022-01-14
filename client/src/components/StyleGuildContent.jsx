import styled from "styled-components";
import StyleGuildColors from "./StyleGuildColors";

const Container = styled.div`
    color: #FFFFFF;
    display: flex;
    flex: 3;
    flex-direction: column;
`;

const Title = styled.h1`
    margin-bottom: 16px;
`;

const StyleGuildContent = () => {
    return (
        <Container>
            <Title>Cores</Title>
            <StyleGuildColors />
        </Container>
    )
};

export default StyleGuildContent;
