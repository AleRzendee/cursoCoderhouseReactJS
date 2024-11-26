import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

*,
*:before,
*:after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
    color: inherit;
}

a.links {
    display: none;
}

`
