import styled from "styled-components";

const FooterContainer = styled.div`
    background-color: #EEEEEE;
    width: 100%;
    position: fixed;
    bottom: 0;
`;

const StyledParagraph = styled.p`
    color: #000000;
    font-size: 14px;
    text-align: center;
    padding: 10px;
`;


export function Footer(){
    return(
        <FooterContainer>
            <StyledParagraph>MKS sistemas © Todos os direitos reservados</StyledParagraph>
        </FooterContainer>
    )
}