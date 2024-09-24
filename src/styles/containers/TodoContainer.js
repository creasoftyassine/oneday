import styled from '@emotion/styled';

const TodoContainer = styled.div`
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 8px;
        background-color: white;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        max-width: 600px;
        margin: 20px auto;

        h2 {
            margin: 0 0 10px;
        }

        p {
            margin: 5px 0;
        }

        .button-container {
            display: flex;
            justify-content: space-between; /* Pour espacer les boutons */
            margin-top: 20px; /* Espacement au-dessus des boutons */
        }
`;
export default TodoContainer;