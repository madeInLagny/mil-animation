/* v3.0 */

/* This animation has 3 options : (10% : default), 20% or 30% */

import { css } from "lit-element";

export const fadeInLeftSmall = css`
  /* FadeInSmall 10% */
  @-webkit-keyframes FadeInLeftSmall {
    from {
      opacity: 0;
      -webkit-transform: translate3d(-10%, 0, 0);
      transform: translate3d(-10%, 0, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes FadeInLeftSmall {
    from {
      opacity: 0;
      -webkit-transform: translate3d(-10%, 0, 0);
      transform: translate3d(-10%, 0, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  .fadeInLeftSmall {
    -webkit-animation-name: FadeInLeftSmall;
    animation-name: FadeInLeftSmall;
    opacity: 0;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }

  /* FadeInSmall 20% */
  @-webkit-keyframes FadeInLeftSmall20 {
    from {
      opacity: 0;
      -webkit-transform: translate3d(-20%, 0, 0);
      transform: translate3d(-20%, 0, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes FadeInLeftSmall20 {
    from {
      opacity: 0;
      -webkit-transform: translate3d(-20%, 0, 0);
      transform: translate3d(-20%, 0, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  .fadeInLeftSmall20 {
    -webkit-animation-name: FadeInLeftSmall20;
    animation-name: FadeInLeftSmall20;
    opacity: 0;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }

  /* FadeInSmall 30% */
  @-webkit-keyframes FadeInLeftSmall30 {
    from {
      opacity: 0;
      -webkit-transform: translate3d(-30%, 0, 0);
      transform: translate3d(-30%, 0, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes FadeInLeftSmall30 {
    from {
      opacity: 0;
      -webkit-transform: translate3d(-30%, 0, 0);
      transform: translate3d(-30%, 0, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  .fadeInLeftSmall30 {
    -webkit-animation-name: FadeInLeftSmall30;
    animation-name: FadeInLeftSmall30;
    opacity: 0;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
`;
