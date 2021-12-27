import styled from "styled-components";

export const Container = styled.div`
    color: white;
    background: linear-gradient(to right, rgb(0, 0, 0), rgb(67, 67, 67));
    display: flex;
    width: 207vh;
    height: 85vh;
   justify-content: center;
`;

export const Title= styled.h3`
    font-weight: bold;
    margin-top: 30px;
    margin-left: 20px;
`;

export const Card = styled.div`
    width: 80vh;
    height: 60vh;
    margin-top: 60px;
    background: linear-gradient(to right, rgb(31, 28, 44), rgb(146, 141, 171));

`;

export const List = styled.ul`
    list-style-type: none;
    font-size: 16px;
    margin-left: 15px;
    margin-top: 60px;

`;

export const ListItem = styled.li`
    font-weight: bold;
    margin-top: 10px;

`;