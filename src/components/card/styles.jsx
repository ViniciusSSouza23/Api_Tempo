import styled from "styled-components";


export const Container = styled.div`
   margin-top: 50px;
   margin-left: 30px;
    width: 80vh;
    height: 60vh;
    background: linear-gradient(to right, rgb(31, 28, 44), rgb(146, 141, 171));
    

    @media(max-width: 720px)
    {
        flex-direction: column;
    }
    @media(max-width:480px)
    {
        
    }
`;

export const Title = styled.h2`
    font-weight: bold;
    color: white;
    padding-top: 40px;
    text-align: center;
    @media(max-width:720px)
    {
        font-size: 16px;
    }
    @media(max-width:480px)
    {
        font-size: 14px;
    }

`;

export const Texto = styled.p`
    font-size: 16px;
    margin-top: 35px;
    color: white;
    margin-left: 5px;
   padding:20px;
    margin-bottom: 40px;
    @media(max-width:720px)
    {
        font-size: 10px;
    }
    @media(max-width:480px)
    {
       font-size: 8px;
    }
`;

export const Button = styled.a`
    margin-left: 35%;
    margin-top: 20px;
`;