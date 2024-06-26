import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  font-family: 'Montserrat', sans-serif;
}

html {
  font-size: 62.5%;
}

body {
  background-color: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.text.primary};
  font-size: 1.6rem;
}

a {
  color: inherit;
  text-decoration: none;
}

button, input, select {
  font-family: 'Montserrat', sans-serif;
}

button {
  border: none;
  font-size: 1.6rem;

  transition: all 0.25s;

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.text.gray};
    cursor: no-drop;
    filter: none;
  }
}
`
