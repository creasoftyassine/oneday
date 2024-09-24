import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background: #FAFAFA;

    @media (min-width: 768px) {
        margin: 0 50px;
    }

    @media (min-width: 1024px) {
        margin: 0 100px;
    }

    @media (min-width: 1440px) {
        margin: 0 200px;
    }
`;
