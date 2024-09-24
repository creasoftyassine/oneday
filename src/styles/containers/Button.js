/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { theme } from '../theme';

const ButtonContainer = styled.button`
    padding: 10px 15px;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    align-self: flex-end;

    ${({ type }) => css`
        background-color: ${theme.colors[type] || theme.colors.primary};
        
        &:hover {
            opacity: 0.9;
        }
    `}
`;

const Button = ({ type = 'primary', children, ...props }) => {
    return (
        <ButtonContainer type={type} {...props}>
            {children}
        </ButtonContainer>
    );
};

export default Button;
