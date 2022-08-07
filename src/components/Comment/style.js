import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;
`;

export const RootComments = styled.div`
    width: 100%;
    height: auto;
    padding: 20px;
    display: flex;
    gap: 20px;
    border-radius: 8px;
    background: ${theme.colors.white};
    box-shadow: 0 0 12px 1px rgba(0, 0, 0, .1);

    @media(max-width: 740px) {
        gap: 8px;
    }

    @media(max-width: 650px) {
        padding: 10px;
    }

    @media(max-width: 600px) {
        padding: 12px;
        flex-direction: column;
    }
`;

export const Left = styled.div`
    width: 40px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: ${theme.colors.veryLightGray};
    border-radius: 10px;

    h4 {
        color: ${theme.colors.moderateBlue};
    }

    @media(max-width: 650px) {
        width: 25px;
    }

    @media(max-width: 600px) {
        display: none;
    }
`;

export const BottomLeft = styled.div`
    width: 100px;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: ${theme.colors.veryLightGray};
    border-radius: 10px;

    h4 {
        color: ${theme.colors.moderateBlue};
    }
`;

export const Icon = styled.img`
    cursor: pointer;
`;

export const Right = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media(max-width: 600px) {
        width: 100%;
    }
`;

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    > span {
        padding-left: 5px;
        padding-right: 5px;
        font-size: .9rem;
        font-weight: 500;
        color: white;
        background: ${theme.colors.moderateBlue};
    }

    @media(max-width: 785px) {
        gap: 5px;

        > span {
            padding: 0;
            font-size: .8rem;
        }
    }

    @media(max-width: 600px) {
        gap: 8px;
    }
`;

export const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;


    @media(max-width: 740px) {
        width: 35px;
        height: 35px;
    }
`;

export const Name = styled.p`
    font-weight: 700;

    @media(max-width: 740px) {
        font-size: .85rem;
    }
`;

export const Time = styled.p`
    @media(max-width: 740px) {
        font-size: .85rem;
    }
`;

export const Actions = styled.div`
    display: flex;
    gap: 20px;
`;

export const BottomActions = styled.div`
`;

export const ActionsCurrentUser = styled.div`
    display: flex;
    gap: 20px;

    @media(max-width: 785px) {
        gap: 5px;
    }

    @media(max-width: 600px) {
        display: none;
    }
`;

export const ActionsCurrentUserBottom = styled.div`
    display: flex;
    gap: 20px;

    @media(max-width: 600px) {
        display: flex;
    }
`;

export const Delete = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 600;
    color: ${theme.colors.softRed};
    cursor: pointer;
`;

export const Edit = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 600;
    color: ${theme.colors.moderateBlue};
    cursor: pointer;
`;

export const Reply = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    
    &:hover {
        opacity: 60%;
    }

    @media(max-width: 600px) {
        display: none;
    }
`;

export const BottomReply = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    
    &:hover {
        opacity: 60%;
    }
`;

export const Arrow = styled.div`
    width: 20px;
    height: 20px;
    background: url("./images/icon-reply.svg");
    background-repeat: no-repeat;
    background-position: center center;
`;

export const Button = styled.button`
    border: none;
    background: none;
    font-size: 1rem;
    font-weight: 500;
    color: ${theme.colors.moderateBlue}; 
    cursor: pointer;
`;

export const Text = styled.div`
    display: flex;
    gap: 5px;
    
    @media(max-width: 600px) {
        line-height: 22px;
    }
`;

export const Tag = styled.span`
    font-weight: bolder;
    color: ${theme.colors.moderateBlue};
`;

export const Bottom = styled.div`
    display: none;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 600px) {
        display: flex;
    }
`;

export const ReplyComments = styled.div`
    width: 95%;
    padding-left: 30px;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-left: 3px solid ${theme.colors.lightGray};
`;