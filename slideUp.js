import { css } from "lit-element";

export const slideUp = css`
  @-webkit-keyframes SlideDown {
    0% {
      height: 0;
    }
    100% {
      height: 100%;
    }
  }

  @keyframes SlideDown {
    0% {
      height: 0;
    }
    100% {
      height: 100%;
    }
  }

  .slideUp {
    -webkit-animation-name: SlideDown;
    animation-name: SlideDown;
    animation-fill-mode: forwards;
  }
`;
