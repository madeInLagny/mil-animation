/* v3.0 */
import { css } from "lit-element";

export const fadeInUp = css`
  @-webkit-keyframes FadeInUp {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes FadeInUp {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  .fadeInUp {
    -webkit-animation-name: FadeInUp;
    animation-name: FadeInUp;
    opacity: 0;
    animation-fill-mode: forwards;
  }
`;
