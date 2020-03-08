import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(200%);
  }
`;

export const Container = styled.div`
    width: 80%;
    height: 30%;
    display: flex;
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

    visibility: ${props => (props.view ? 'visible' : 'hidden')};
    animation: ${props => (props.view ? fadeIn : fadeOut)} 0.6s forwards;
    transition: visibility 0.2s;
`;

export const ContainerHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;

    button {
        padding: 2px;
        color: #fff;
        border-radius: 50px;
        background-color: #100e17;
        border-radius: 10px;
        /* box-shadow: -1rem 0 3rem #000; */
        border: none;
    }
`;

export const ContainerContent = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: flex-start;
`;

export const ContainerDetail = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 12px;
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

export const ContainerAvatar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
