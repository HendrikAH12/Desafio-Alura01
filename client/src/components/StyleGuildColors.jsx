import styled from "styled-components";
import { ColorData } from "../colorData";
import StyleGuildColor from "./StyleGuildColor";

const Container = styled.div`
    display: flex;
    flex: 3;
    gap: 16px;
`;

const StyleGuildColors = () => {
    return (
        <Container>
            {ColorData.map((item) => <StyleGuildColor key={item.id} hex={item.hex} rgb={item.rgb} /> )}
        </Container>
    )
};

export default StyleGuildColors;
