import styled, { createGlobalStyle } from "styled-components";

export const ShowcaseWrapper = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)),
    url(${({ bgImage: image }) => image}) no-repeat center center;
  background-size: 100%, cover;
  background-attachment: fixed;
  /* background-size: 100%, cover; */
  /* background-position: top center; */
  min-height: ${({ height }) => height || "90vh"};
  /* height: 90vh; */
  /* padding: 0 30px; */

  @media (max-width: 578px) {
    height: ${({ height }) => height || "70vh"};
  }
`;

export const GlobalStyle = createGlobalStyle`
:root {
    --maxWidth: 1280px;
    --white: #f8fafb;
    --deepBlue: #311d6b;
    --lightBlue: #70c0e8;
    /* --lightBlue: #68ba35; */
    --gold: #f9d20a;
    --darkBrown: #593d0b;
    /* --gold: #d4b017; */
    /* --gold: #d7b645; */
}
.white {
    color: #f8fafb;
}
.deepBlue {
    color: #311d6b;
}
.lightBlue {
    color: #68ba35;
}
.gold {
    color: #f9d20a;
}
.center {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.center-y {
    flex-direction: column;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    /* font-family: "Abel", sans-serif; */
}

body {
    margin: 0;
    padding: 0;
    h1 {
        /* color: var(--white); */
    }
    p {
        font-size: 1.2rem;
        /* color: var(--white); */
    }
}
`;
