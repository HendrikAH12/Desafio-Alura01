import { useState } from "react";
import styled from "styled-components";
import { HexColorPicker } from "react-colorful";

const Container = styled.div`
    color: #FFFFFF;
    display: flex;
    flex: 3;
`;

const Center = styled.div`
    flex: 2;
`;

const TextAreaContainer = styled.div`
    display: flex;
    width: 100%;
    background-color: ${(props) => props.color};
    height: 366px;
    border-radius: 8px;
`;

const TextAreaSubContainer = styled.div`
    width: 100%;
    background-color: #141414;
    box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.24);
    border-radius: 8px;
    margin: 32px;
    padding: 16px;
    align-items: center;
    justify-content: center;
`

const ColorContainer = styled.div`
    display: flex;
`;

const Color = styled.div`
    width: 12px;
    height: 12px;
    background-color: ${(props) => props.color};
    border-radius: 50%;
    margin: 0px 8px 24px 0px;
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

const Button = styled.button`
    background-color: rgba(80, 129, 251, 0.08);
    color: #FFFFFF;
    padding: 16px 0px;
    border: none;
    border-radius: 8px;
    width: 100%;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    cursor: pointer;
    margin-top: 32px;

    &:hover {
        background-color: rgba(80, 129, 251, 0.16);
    }

    &:active {
        margin-top: 28px;
        border: 4px solid rgba(80, 129, 251, 0.24);
    }

    &:focus {
        background: rgba(80, 129, 251, 0.24);
    }
`;

const FormContainer = styled.div`
    display: flex;
    flex: 1;
`;

const Form = styled.div`
    margin-left: 40px;
`;

const FormTitle = styled.h3`
    color: #FFFFFF;
    font-size: 12px;
    font-style: normal;
    font-weight: normal;
    letter-spacing: 0.4em;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

const FormInput = styled.input`
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-radius: 8px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    background-color: rgba(255, 255, 255, 0.16);
    padding: 16px 14px;
    &::placeholder {
        color: #FFFFFF;
        opacity: 0.64;
    }
    margin-bottom: 16px;

    &:hover {
        background-color: rgba(255, 255, 255, 0.24);
    }
`;

const FormTextArea = styled.textarea`
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-radius: 8px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    background-color: rgba(255, 255, 255, 0.16);
    padding: 16px 14px;
    &::placeholder {
        color: #FFFFFF;
        opacity: 0.64;
    }
    margin-bottom: 40px;
    resize: none;

    &:hover {
        background-color: rgba(255, 255, 255, 0.24);
    }
`;

const FormSelect = styled.select`
    border: none;
    border-radius: 8px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    background-color: rgba(255, 255, 255, 0.16);
    padding: 16px 0px 16px 14px;
    width: 100%;
    color: rgba(255,255,255, 0.64);
    margin-bottom: 16px;
    border-right: .6rem solid rgba(255, 255, 255, 0.0);
    
    &:hover {
        background-color: rgba(255, 255, 255, 0.24);
    }
`;

const FormOption = styled.option`
    color: black;
`;

const FormColorContainer = styled.div`
    display: flex;
    border: 1px solid #FFFFFF;
    border-radius: 8px;
    box-sizing: border-box;
`;

const FormColorBottun  = styled.button`
    width: 100%;
    border: none;
    margin: 8px;
    height: 40px;
    border-radius: 4px;
    background-color: ${(props) => props.color};
    cursor: pointer;
`;

const ColorPickerContainer = styled.div`
    align-items: center;
    justify-content: center;
    margin-top: 16px;
`;

const FormButton = styled.button`
    padding: 16px 0px;
    border: none;
    border-radius: 8px;
    width: 100%;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    cursor: pointer;
    color: #051D3B;
    background-color: #5081FB;
    margin-top: 32px;

    &:hover {
        background-color: #7BA4FC;
    }

    &:active {
        margin-top: 28px;
        border: 4px solid rgba(80, 129, 251, 0.72);
    }

    &:focus {
        background: #96B9FD;
    }
`;

const ProjectContent = () => {
    const [background, setBackground] = useState("#6BD1FF");
    const [showColerPiker, setShowColerPiker] = useState("none");

    const callColerPicker = () => {
        if (showColerPiker === "none") setShowColerPiker("");
        else setShowColerPiker("none");
    };

    return (
        <Container>
            <Center>
                <TextAreaContainer color={background}>
                    <TextAreaSubContainer>
                        <ColorContainer>
                            <Color color="#FF5F56" />
                            <Color color="#FFBD2E" />
                            <Color color="#27C93F" />
                        </ColorContainer>
                        <TextArea rows="14" />
                    </TextAreaSubContainer>
                </TextAreaContainer>
                <Button>Visualizar com o highlight</Button>
            </Center>

            <FormContainer>
                <Form>
                    <FormTitle>Seu Projeto</FormTitle>

                    <FormInput placeholder="Nome do seu projeto" />
                    <FormTextArea rows="2" placeholder="Descrição do seu projeto" />

                    <FormTitle>Personalização</FormTitle>

                    <FormSelect defaultValue="JavaScript">
                        <FormOption>C++</FormOption>
                        <FormOption>C#</FormOption>
                        <FormOption>JavaScript</FormOption>
                        <FormOption>Python</FormOption>
                    </FormSelect>

                    <FormColorContainer>
                        <FormColorBottun color={background} onClick={callColerPicker}></FormColorBottun>
                    </FormColorContainer>

                    <ColorPickerContainer style={{display: showColerPiker}}>
                        <HexColorPicker style={{width: "100%"}} color={background}
                        onChange={setBackground}/>
                    </ColorPickerContainer>

                    <FormButton>Salvar projeto</FormButton>
                </Form>
            </FormContainer>
        </Container>
    );
}

export default ProjectContent;
