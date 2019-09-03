import { css } from "lit-element";

export const fadeInRight = css`
  @-webkit-keyframes FadeInRight {
    from {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }

    to {
      opacity: 1;
      transform: none;
    }
  }

  @keyframes FadeInRight {
    from {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }

    to {
      opacity: 1;
      transform: none;
    }
  }

  .fadeInRight {
    -webkit-animation-name: FadeInRight;
    animation-name: FadeInRight;
    opacity: 0;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
`;
