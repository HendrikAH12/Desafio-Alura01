import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex: 1;
    height: 205px;
    background-color: #FFFFFF;
    border-radius: 8px;
    color: black;
    padding: 8px;
    flex-direction: column;
`;

const ColorContainer = styled.div`
    background-color: ${(props) => props.color};
    width: 100%;
    border-radius: 8px;
    height: 109px;
`;

const ContentContainer = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
`;

const Top = styled.div`
    display: flex;
    margin-bottom: 14px;
    justify-content: space-between;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    color: #A3A3A3;
    letter-spacing: 0.24em;
    text-transform: uppercase;
`;

const Right = styled.div`
    
`;

const StyleGuildColor = ({hex, rgb}) => {
    return (
        <Container>
            <ColorContainer color={"#"+hex} />
            <ContentContainer>
                <Top>
                    <Left>
                        HEX
                    </Left>
                    
                    <Right>
                        {hex}
                    </Right>
                </Top>

                <Bottom>
                    <Left>
                        RGB
                    </Left>
                    
                    <Right>
                        {rgb}
                    </Right>
                </Bottom>
            </ContentContainer>
        </Container>
    )
};

export default StyleGuildColor;
