import { css } from "lit-element";

export const jello = css`
  @-webkit-keyframes jello {
    from,
    11.1%,
    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

    22.2% {
      -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
      transform: skewX(-12.5deg) skewY(-12.5deg);
    }

    33.3% {
      -webkit-transform: skewX(6.25deg) skewY(6.25deg);
      transform: skewX(6.25deg) skewY(6.25deg);
    }

    44.4% {
      -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
      transform: skewX(-3.125deg) skewY(-3.125deg);
    }

    55.5% {
      -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
      transform: skewX(1.5625deg) skewY(1.5625deg);
    }

    66.6% {
      -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      transform: skewX(-0.78125deg) skewY(-0.78125deg);
    }

    77.7% {
      -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
      transform: skewX(0.390625deg) skewY(0.390625deg);
    }

    88.8% {
      -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
      transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    }
  }

  @keyframes jello {
    from,
    11.1%,
    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

    22.2% {
      -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
      transform: skewX(-12.5deg) skewY(-12.5deg);
    }

    33.3% {
      -webkit-transform: skewX(6.25deg) skewY(6.25deg);
      transform: skewX(6.25deg) skewY(6.25deg);
    }

    44.4% {
      -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
      transform: skewX(-3.125deg) skewY(-3.125deg);
    }

    55.5% {
      -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
      transform: skewX(1.5625deg) skewY(1.5625deg);
    }

    66.6% {
      -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
      transform: skewX(-0.78125deg) skewY(-0.78125deg);
    }

    77.7% {
      -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
      transform: skewX(0.390625deg) skewY(0.390625deg);
    }

    88.8% {
      -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
      transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    }
  }

  .jello {
    -webkit-animation-name: jello;
    animation-name: jello;
    -webkit-transform-origin: center;
    -ms-transform-origin: center;
    transform-origin: center;
  }
`;
