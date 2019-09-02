/* v3.0 */

/* This animation has 3 options : (10% : default), 20% or 30% */

import { css } from "lit-element";

export const fadeInUpSmall = css`
  /* FadeInSmall 10% */
  @-webkit-keyframes FadeInUpSmall {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 10%, 0);
      transform: translate3d(0, 10%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes FadeInUpSmall {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 10%, 0);
      transform: translate3d(0, 10%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  .fadeInUpSmall {
    -webkit-animation-name: FadeInUpSmall;
    animation-name: FadeInUpSmall;
    opacity: 0;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }

  /* FadeInSmall 20% */
  @-webkit-keyframes FadeInUpSmall20 {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 20%, 0);
      transform: translate3d(0, 20%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes FadeInUpSmall20 {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 20%, 0);
      transform: translate3d(0, 20%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  .fadeInUpSmall20 {
    -webkit-animation-name: FadeInUpSmall20;
    animation-name: FadeInUpSmall20;
    opacity: 0;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }

  /* FadeInSmall 30% */
  @-webkit-keyframes FadeInUpSmall30 {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 30%, 0);
      transform: translate3d(0, 30%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes FadeInUpSmall30 {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 30%, 0);
      transform: translate3d(0, 30%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  .fadeInUpSmall30 {
    -webkit-animation-name: FadeInUpSmall30;
    animation-name: FadeInUpSmall30;
    opacity: 0;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
`;
