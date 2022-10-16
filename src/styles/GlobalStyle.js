import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing:border-box;
    }
    html {
        font-size: 62.5%; /* 1rem을 10px로 변환 */
    }
    @media screen and (max-width: 800px) {
            html {
            font-size: 50%; /* 1rem을 10px로 변환 */
        }
    }
    body {
        background-color:#78B1EA;
        color:black;
    }
    a{
        color:inherit;
        text-decoration:none;
    }
`;
