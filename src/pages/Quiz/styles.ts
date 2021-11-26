import styled from "styled-components";

export const Container = styled.main`
  background-color: white;
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem;
  margin-top: -8rem;
  border-radius: 0.4rem;
`;

export const Content = styled.h1`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-size: 2rem;
    font-weight: 500;
  }

  div {
    display: flex;
    flex-direction: column;
    padding: 2rem 0 2rem;
  }

  input {
    margin-right: 1rem;
  }

  label {
    font-size: 1rem;
    line-height: 2.5rem;
    font-weight: 400;
    color: var(--text-color);

    &.right_answer {
      color: var(--green-text);
    }

    &.wrong_answer {
      color: var(--red-text);
    }
  }
  a {
    display: flex;
    align-items: start;
    justify-content: center;
  }

  button {
    font-size: 1rem;
    color: white;
    background: var(--blue-button);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    align-self: center;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }

    &.next_button {
      color: var(--highlight-button-text);
      background: var(--highlight-button);
    }
    &.finish_button {
      color: var(--green-text);
      background: green;
    }
  }
`;
