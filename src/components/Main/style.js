import styled from "styled-components";
import theme from  '../../styles/theme';

export const Container = styled.div`
    width: 80%;
    height: auto;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    @media(max-width: 600px) {
        width: 90%;
    }
`;

export const Modal = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    background-color: rgba(0, 0, 0, .5);

    @media(max-width: 600px) {
        width: 375px;
    }
`;

export const Box = styled.div`
    width: 350px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    border-radius: 8px;
    background: white;

    > p {
        line-height: 25px;
    }
`;

export const Buttons = styled.div`
    display: flex;
    gap: 10px;

    > button {
        width: 50%;
        height: 40px;
        border: none;
        border-radius: 8px;
        color: white;
        cursor: pointer;
    }

    > button:hover {
        opacity: 60%;
    }

    .cancel {
        background: ${theme.colors.grayishBlue};
    }

    .delete {
        background: ${theme.colors.softRed};
    }
`;