import { css, Global } from '@emotion/react';

const globalStyles = css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Arial, sans-serif';
        background-color: #FAFAFA;
    }
`;

export const GlobalStyles = () => <Global styles={globalStyles} />;
