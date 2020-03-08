import styled from 'styled-components';

export const Container = styled.li`
    display: flex;
    height: 280px;
    width: 200px;
    background-color: #17141d;
    border-radius: 10px;
    box-shadow: -1rem 0 3rem #000;
    transition: 0.4s ease-out;
    position: relative;
    left: 0px;
    padding: 18px;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    cursor: pointer;

    &:not(:first-child) {
        margin-left: -50px;
        @media screen and (max-width: 910px) {
            margin-left: 0px;
        }
    }

    &:hover {
        transform: translateY(-20px);
        transition: 0.4s ease-out;
    }

    &:hover ~ .card {
        position: relative;
        left: 50px;
        transition: 0.4s ease-out;
    }
`;

export const TitleCompany = styled.span`
    margin-top: 18px;
    font-size: 18px;
    white-space: nowrap;
    color: white;
    font-weight: 300;
`;

export const Function = styled.span`
    margin-top: 8px;
    color: #d3d3d3;
`;

export const Period = styled.span`
    color: #d3d3d3;
`;

export const ContainerHeader = styled.div`
    display: flex;
`;
