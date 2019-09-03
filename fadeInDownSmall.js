/* This animation has 3 options : (10% : default), 20% or 30% */

import { css } from "lit-element";

export const fadeInDownSmall = css`
  /* FadeInSmall 10% */
  @-webkit-keyframes FadeInDownSmall {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, -10%, 0);
      transform: translate3d(0, -10%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes FadeInDownSmall {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, -10%, 0);
      transform: translate3d(0, -10%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  .fadeInDownSmall {
    -webkit-animation-name: FadeInDownSmall;
    animation-name: FadeInDownSmall;
    opacity: 0;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }

  /* FadeInSmall 20% */
  @-webkit-keyframes FadeInDownSmall20 {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, -20%, 0);
      transform: translate3d(0, -20%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes FadeInDownSmall20 {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, -20%, 0);
      transform: translate3d(0, -20%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  .fadeInDownSmall20 {
    -webkit-animation-name: FadeInDownSmall20;
    animation-name: FadeInDownSmall20;
    opacity: 0;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }

  /* FadeInSmall 30% */
  @-webkit-keyframes FadeInDownSmall30 {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, -30%, 0);
      transform: translate3d(0, -30%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes FadeInDownSmall30 {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, -30%, 0);
      transform: translate3d(0, -30%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  .fadeInDownSmall30 {
    -webkit-animation-name: FadeInDownSmall30;
    animation-name: FadeInDownSmall30;
    opacity: 0;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
`;
