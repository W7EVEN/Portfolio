import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::selection {
  color: ${({ theme }) => theme.colors.textSelection};
  background-color: ${({ theme }) => theme.colors.selection};
}


::-webkit-scrollbar {
  width: 10px;
  transition: all 300ms ease;
}

/* Track */
::-webkit-scrollbar-track {
  background-color: ${({ theme }) => theme.colors.secondBackground};
  transition: all 300ms ease;
}

/* Handle */
::-webkit-scrollbar-thumb {
 
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 0.25rem;
  transition: all 300ms ease;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background-color: ${({ theme }) => theme.colors.darker};
}

a {
  text-decoration: none;
  transition: color 300ms ease;
}

a:hover {
  color: ${({ theme }) => theme.colors.primary}
}

body {
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: "Poppins", sans-serif;
  scrollbar-width: none;

  
  font-weight: 500;
}



section {
  padding: 0 3vw;
  min-height: 80vh;

  @media screen and (max-width: 768px) {
    padding: 3rem 1rem;
  }
}

`;
