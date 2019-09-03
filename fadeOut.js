import { css } from "lit-element";

export const fadeOut = css`
  @-webkit-keyframes FadeOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }

  @keyframes FadeOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }

  .fadeOut {
    -webkit-animation-name: FadeOut;
    animation-name: FadeOut;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
`;
