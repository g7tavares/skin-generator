import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.div`
  margin-top: -10rem;
  background-color: var(--background);
  border-radius: 0.5rem;
  padding: 1.5rem 2rem;

  select {
    cursor: pointer;
  }

  input {
    padding: 0 0.3rem;
  }
`;

export const Header = styled.div`
  p {
    color: var(--text-title);
    margin-bottom: 0.1rem;
    span {
      color: ${transparentize(0.65, `#ffffff`)};
    }
  }
`;

export const Content1 = styled.div`
  div {
    color: var(--text-title);
    margin-bottom: 0.5rem;

    select {
      width: 100%;
      height: 2rem;
      background: var(--shape);
      color: var(--text-body);
      border: 1px solid var(--purple);
    }

    input {
      width: 100%;
      height: 2rem;
      background: var(--shape);
      color: var(--text-body);
      border: 1px solid var(--purple);
      &:nth-child(2) {
        float: right;
      }
    }
  }
`;

export const Content2 = styled.div`
  div {
    color: var(--text-title);

    select {
      width: 100%;
      height: 2rem;
      margin-bottom: 0.5rem;
      background: var(--shape);
      color: var(--text-body);
      border: 1px solid var(--purple);
      transition: 0.3s;
    }

    button {
      font-size: 1.5rem;
      font-weight: bold;
      width: 100%;
      height: 2.5rem;
      margin: 1rem 0;
      background: var(--shape);
      color: var(--text-body);
      border: 1px solid var(--purple);
      transition: background 0.3s;
      
      &:hover{
        background: var(--purple);
        transition: background 0.3s;
      }
    }

    input {
      width: 100%;
      height: 2rem;
      font-weight: 600;
      background: var(--shape);
      color: var(--text-body);
      border: 1px solid var(--purple);
    }
  }

    p {
      margin-bottom: 0.1rem;
      span {
        color: ${transparentize(0.65, `#ffffff`)};
      }
    }

    p.text {
      font-size: 2rem;
    }
  }
`;
