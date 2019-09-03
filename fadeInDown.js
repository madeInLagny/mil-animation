import { css } from "lit-element";

export const fadeInDown = css`
  @-webkit-keyframes FadeInDown {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes FadeInDown {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  .fadeInDown {
    -webkit-animation-name: FadeInDown;
    animation-name: FadeInDown;
    opacity: 0;
    animation-fill-mode: forwards;
  }
`;
