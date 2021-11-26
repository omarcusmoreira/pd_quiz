import styled from "styled-components";

export const Container = styled.main`
  background-color: white;
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem;
  margin-top: -8rem;
  border-radius: 0.4rem;
`;

export const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  img {
    width: 100%;
    align-self: center;
  }

  div {
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
    margin-top: 4rem;
    margin-bottom: 4rem;
  }

  h1 {
    font-size: 2.5rem;
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

    p {
      transition: filter 0.2s;

      &:hover {
        filter: brightness(1.5);
      }
    }
  }

  button {
    font-size: 1rem;
    color: white;
    background: var(--blue-button);
    border: 0;
    padding: 0 2rem;
    border-radius: 0ch.25rem;
    height: 3rem;
    align-self: center;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(1.2);
    }
  }
`;
