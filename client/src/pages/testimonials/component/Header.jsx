import styled from "styled-components";

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderText>ADVISORY MEMBERS</HeaderText>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div`
    width: 100%;
    padding: 10px 0;
    background-color: #333;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    text-align: center;
`;

const HeaderText = styled.h1`
    font-size: 28px;
    font-weight: 700; /* Bold font weight */
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3); /* Slight text shadow */
`;

export default Header;
