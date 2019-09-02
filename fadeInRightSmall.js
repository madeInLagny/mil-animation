/* v3.0 */

/* This animation has 3 options : (10% : default), 20% or 30% */

import { css } from "lit-element";

export const fadeInRightSmall = css`
  /* FadeInSmall 10% */
  @-webkit-keyframes FadeInRightSmall {
    from {
      opacity: 0;
      -webkit-transform: translate3d(10%, 0, 0);
      transform: translate3d(10%, 0, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes FadeInRightSmall {
    from {
      opacity: 0;
      -webkit-transform: translate3d(10%, 0, 0);
      transform: translate3d(10%, 0, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  .fadeInRightSmall {
    -webkit-animation-name: FadeInRightSmall;
    animation-name: FadeInRightSmall;
    opacity: 0;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }

  /* FadeInSmall 20% */
  @-webkit-keyframes FadeInRightSmall20 {
    from {
      opacity: 0;
      -webkit-transform: translate3d(20%, 0, 0);
      transform: translate3d(20%, 0, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes FadeInRightSmall20 {
    from {
      opacity: 0;
      -webkit-transform: translate3d(20%, 0, 0);
      transform: translate3d(20%, 0, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  .fadeInRightSmall20 {
    -webkit-animation-name: FadeInRightSmall20;
    animation-name: FadeInRightSmall20;
    opacity: 0;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }

  /* FadeInSmall 30% */
  @-webkit-keyframes FadeInRightSmall30 {
    from {
      opacity: 0;
      -webkit-transform: translate3d(30%, 0, 0);
      transform: translate3d(30%, 0, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes FadeInRightSmall30 {
    from {
      opacity: 0;
      -webkit-transform: translate3d(30%, 0, 0);
      transform: translate3d(30%, 0, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  .fadeInRightSmall30 {
    -webkit-animation-name: FadeInRightSmall30;
    animation-name: FadeInRightSmall30;
    opacity: 0;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
`;
