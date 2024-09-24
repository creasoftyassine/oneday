/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const Card = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    transition: box-shadow 0.3s ease;
    height: 170px; /* Hauteur fixe pour les cartes */
    width: 270px; /* Largeur fixe pour les cartes */
    text-decoration: none; /* Retirer le soulignement par défaut */
    color: inherit; /* Garder la couleur du texte du parent */

    &:hover {
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }
`;

export default Card;
