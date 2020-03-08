import styled from 'styled-components';

export const Container = styled.ul`
    padding: 18px;
    display: flex;
    width: 100%;
    height: 60%;
    justify-content: center;
    align-items: center;
    overflow: auto;

    @media screen and (max-width: 910px) {
        flex-direction: column;
    }
`;
