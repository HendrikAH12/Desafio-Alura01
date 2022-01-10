import { useState } from "react";
import styled from "styled-components";
import { HexColorPicker } from "react-colorful";
import { tablet, mobile } from "../responsive.js";
import Highlight, { defaultProps } from "prism-react-renderer";
import { theme } from "../theme";

const Container = styled.div`
    color: #FFFFFF;
    display: flex;
    flex: 3;
    ${tablet({ flex: 1, flexDirection: "column" })};
`;

const Center = styled.div`
    flex: 2;
    ${tablet({ flex: 1 })};
`;

const TextAreaContainer = styled.div`
    display: ${(props) => props.display};
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
    ${tablet({ margin: "28px" })};
    ${mobile({ margin: "24px" })};
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
    font-size: 16px;
    white-space: nowrap;
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
    margin-bottom: 40px;

    &:hover {
        background-color: rgba(80, 129, 251, 0.16);
    }

    &:active {
        margin-top: 28px;
        margin-bottom: 36px;
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
    width: 100%;
    margin-left: 40px;
    ${tablet({ marginLeft: "0px" })};
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
    color: #FFFFFF;
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
    color: #FFFFFF;
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

const HighlightContainer = styled.div`
    display: ${(props) => props.display};
    padding: 32px;
    background-color: ${(props) => props.color};
    border-radius: 8px;
    ${tablet({ padding: "28px" })};
    ${mobile({ padding: "24px" })};
`;

const HighlightScrollContainer = styled.div`
    padding: 16px;
    height: 270px;
    overflow-y: scroll;
    font-size: 14px;
    border-radius: 8px;
    background-color: #141414;
    width: 100%;
    box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.24);
    ${tablet({ height: "278px" })};
    ${mobile({ height: "286px" })};
`;

const ProjectContent = () => {
    const [background, setBackground] = useState("#6BD1FF");
    const [displayColerPiker, setDisplayColerPiker] = useState("none");
    const [textArea, setTextArea] = useState("");
    const [projectName, setProjectName] = useState("");
    const [projectDesc, setProjectDesc] = useState("");
    const [option, setOption] = useState("C");

    const showColerPicker = () => {
        if (displayColerPiker === "none") setDisplayColerPiker("");
        else setDisplayColerPiker("none");
    };

    const saveInfo = () => {
        let data = {
            id: Date.now(),
            content: textArea,
            title: projectName,
            desc: projectDesc,
            language: option,
            color: background
        };
        
        let dataArray = [];

        if (localStorage.hasOwnProperty("ProjectList")) {
            dataArray = JSON.parse(localStorage.getItem("ProjectList"));
        }

        dataArray.push(data);
        localStorage.setItem("ProjectList", JSON.stringify(dataArray));
    }

    const [textAreaDisplay, setTextAreaDisplay] = useState("flex");
    const [highlightDisplay, setHighlightDisplay] = useState("none");

    const showHighlight = () => {
        if (textAreaDisplay === "flex") { 
            setTextAreaDisplay("none"); 
            setHighlightDisplay("flex"); 
        } else {
            setTextAreaDisplay("flex");
            setHighlightDisplay("none");
        }
    }

    return (
        <Container>
            <Center>
                <TextAreaContainer color={background} display={textAreaDisplay}>
                    <TextAreaSubContainer>
                        <ColorContainer>
                            <Color color="#FF5F56" />
                            <Color color="#FFBD2E" />
                            <Color color="#27C93F" />
                        </ColorContainer>

                        <TextArea rows="13" onChange={(e) => setTextArea(e.target.value)} />
                    </TextAreaSubContainer>
                </TextAreaContainer>

                <HighlightContainer display={highlightDisplay} color={background}>
                    <HighlightScrollContainer>
                        <ColorContainer>
                            <Color color="#FF5F56" />
                            <Color color="#FFBD2E" />
                            <Color color="#27C93F" />
                        </ColorContainer>

                        <Highlight {...defaultProps} code={textArea.trim()} language={option} theme={theme} >
                            {({ className, tokens, getLineProps, getTokenProps }) => (
                                <pre className={className} style={{width: "0"}}>
                                    {tokens.map((line, i) => (
                                        <div {...getLineProps({ line, key: i })}>
                                            {line.map((token, key) => (
                                                <span {...getTokenProps({ token, key })} />
                                            ))}
                                        </div>
                                    ))}
                                </pre>
                            )}
                        </Highlight>
                    </HighlightScrollContainer>
                </HighlightContainer>

                <Button onClick={showHighlight}>Visualizar com o highlight</Button>
            </Center>

            <FormContainer>
                <Form>
                    <FormTitle>Seu Projeto</FormTitle>

                    <FormInput placeholder="Nome do seu projeto" onChange={(e) => setProjectName(e.target.value)} />
                    <FormTextArea rows="2" placeholder="Descrição do seu projeto" onChange={(e) => setProjectDesc(e.target.value)} />

                    <FormTitle>Personalização</FormTitle>

                    <FormSelect onChange={(e) => setOption(e.target.value)}>
                        <FormOption value="c">C</FormOption>
                        <FormOption value="css">CSS</FormOption>
                        <FormOption value="html">HTML</FormOption>
                        <FormOption value="javascript">JS</FormOption>
                        <FormOption value="jsx">JSX</FormOption>
                        <FormOption value="python">Python</FormOption>
                    </FormSelect>

                    <FormColorContainer>
                        <FormColorBottun color={background} onClick={showColerPicker}></FormColorBottun>
                    </FormColorContainer>

                    <ColorPickerContainer style={{display: displayColerPiker}}>
                        <HexColorPicker style={{width: "100%"}} color={background}
                        onChange={setBackground}/>
                    </ColorPickerContainer>

                    <FormButton onClick={saveInfo}>Salvar projeto</FormButton>
                </Form>
            </FormContainer>
        </Container>
    );
}

export default ProjectContent;
