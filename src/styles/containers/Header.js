import styled from '@emotion/styled';

export const Header = styled.header`
    position: sticky;
    top: 0;
    background: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 100;
    width: 100%;
    box-sizing: border-box;

    @media (min-width: 768px) {
        padding: 10px 60px;
    }

    @media (min-width: 1024px) {
        padding: 10px 110px;
    }

    @media (min-width: 1440px) {
        padding: 10px 210px;
    }
`;
