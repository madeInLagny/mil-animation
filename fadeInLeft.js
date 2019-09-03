import { css } from "lit-element";

export const fadeInLeft = css`
  @-webkit-keyframes FadeInLeft {
    from {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }

    to {
      opacity: 1;
      transform: none;
    }
  }

  @keyframes FadeInLeft {
    from {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }

    to {
      opacity: 1;
      transform: none;
    }
  }

  .fadeInLeft {
    -webkit-animation-name: FadeInLeft;
    animation-name: FadeInLeft;
    opacity: 0;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
`;
