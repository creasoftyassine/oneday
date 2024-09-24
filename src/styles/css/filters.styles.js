
import { css } from '@emotion/react';

// Style du conteneur global des filtres
const filtersContainerStyle = css`
        display: flex;
        justify-content: space-between;
        padding: 20px;
        flex-wrap: wrap;

        @media (max-width: 768px) {
            flex-direction: column;
            padding: 10px;
        }
    `;

// Colonne des champs de filtre
const fieldsColumnStyle = css`
        display: flex;
        flex-direction: column;
        gap: 20px;
        flex-basis: 60%;
        flex-grow: 1;

        @media (max-width: 768px) {
            flex-basis: 100%;
        }
    `;

// Colonne des boutons
const buttonsColumnStyle = css`
        display: flex;
        flex-direction: column;
        gap: 10px;
        flex-basis: 30%;
        align-self: flex-end; /* Aligne les boutons en bas */
        
        @media (max-width: 768px) {
            flex-basis: 100%;
            align-self: center; /* Alignement centré pour mobile */
        }
    `;

// Style pour les filtres
const filterStyle = css`
        display: flex;
        flex-direction: column;
        gap: 8px;
    `;

// Style des cases à cocher pour qu'elles occupent toute la largeur
const checkboxGridStyle = css`
        display: grid;
        grid-template-columns: repeat(4, 1fr); /* Divise en 4 colonnes */
        gap: 10px;

        @media (max-width: 768px) {
            grid-template-columns: 1fr; /* Pleine largeur sur mobile */
        }
    `;

// Style pour Status et Order by sur une seule ligne
const statusOrderRowStyle = css`
        display: grid;
        grid-template-columns: repeat(2, 1fr); /* Divise en 2 colonnes */
        gap: 10px;

        @media (max-width: 768px) {
            flex-direction: column; /* En colonne sur mobile */
            gap: 10px;
        }
    `;

export { statusOrderRowStyle, checkboxGridStyle, filterStyle, buttonsColumnStyle, fieldsColumnStyle, filtersContainerStyle }