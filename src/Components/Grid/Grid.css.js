import styled from "styled-components";

export const Wrapper = styled.div`
  /* max-width: 1280px; */
  margin: 10px auto;
  /* padding: 0 20px; */
  /* background-color: teal; */

  h1 {
    color: var(--medGrey);
    @media (max-width: 768) {
      font-size: var(--fontBig);
    }
  }
`;

export const Content = styled.div`
  display: grid;
  /* grid-template-columns: repeat(3, 30%) */
  // grid-template-columns: repeat(4, 1fr); /* */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 10px 0;
`;
