import styled from 'styled-components'

export const Carregando = styled.section`
  width: 100%;
  height: 100%;

  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 80rem 14rem;
  animation: placeholderShimmer 1s linear infinite forwards;

  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 0.5em;

  h1 {
    color: var(--background);
    font-size: 4em;
  }
`
