import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
    width: 100%;
    padding: 30px;
    display: flex;
    gap: 10px;
    justify-content: center;
    border-radius: 8px;
    background: ${theme.colors.white};
    box-shadow: 0 0 12px 1px rgba(0, 0, 0, .1);

    @media(max-width: 600px) {
        padding: 15px;
    }
`;

export const Avatar = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: url('./images/avatars/image-juliusomo.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const Input = styled.textarea`
    width: 80%;
    height: 110px;
    padding: 10px;
    resize: none;
    outline: 0;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, .1);

    

    @media(max-width: 600px) {
        width: 70%;
    }
`;

export const Button = styled.button`
    width: 15%;
    height: 50px;
    border-radius: 8px;
    border: none;
    background: ${theme.colors.moderateBlue};
    color: ${theme.colors.white};
    font-size: 1.1rem;
    cursor: pointer;

    &:hover {
        opacity: 60%;
    }

    @media(max-width: 750px) {
        height: 40px;
    }

    @media(max-width: 600px) {
        width: 60px;
        height: 30px;
        font-size: .9rem;
    }
`;