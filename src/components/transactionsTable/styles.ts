import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1rem;
`;

export const Content = styled.div`
  width: 100%;
  border-spacing: 0 0.5rem;

  div {
    color: var(--text-body);
    font-weight: 400;
    padding: 0.1rem 0.1rem;
    text-align: left;
    line-height: 1.5rem;
  }

  h3{
    text-align: center;
    font-size: 1.5rem;
  }

  p{
    text-align: center;
    font-size: 1.5rem;
    padding: 1rem 0;
    background-color: var(--shape);
    border-radius: 0.7rem;
  }

`;
