/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const CardList = styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* 3 items par ligne */
        gap: 20px;
        padding: 20px;

        @media (max-width: 1024px) {
            grid-template-columns: repeat(2, 1fr); /* 2 items par ligne pour tablette */
        }

        @media (max-width: 768px) {
            grid-template-columns: 1fr; /* 1 item par ligne pour mobile */
        }
`;

export default CardList;
