import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  justify-content: center;
  background-color: #f9d20a;
`;

export const Content = styled.div`
  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    font-weight: bold;
  }

  span {
    padding-right: 10px;
  }
`;
