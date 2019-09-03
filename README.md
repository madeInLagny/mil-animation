# \<mil-animation\>

'mil-animation' is a suite of css animation files that are compatible with webcomponent and litElement.

## Usage

### Install from npm

```sh
npm install --save mil-animation
```

### Import to your webcomponent

```js
import { animated } from "mil-animation/animated.js";
import { fadeInDownSmall } from "mil-animation/fadeInDownSmall.js";
import { fadeInUpSmall } from "mil-animation/fadeUpDownSmall.js";
...
```

### Add classes to css

```js
static get styles() {
      return [
        animated,
        fadeInDownSmall,
        fadeInUpSmall
            ]}
```

### Use in your element

```js
<h2 class="animated-1 delay-05 fadeInDownSmall">This title will fadeInDownSmall in 1 second after a 0.5 second delay</h2>
<span class="animated-2 delay-1 fadeInUpSmall">This span will fadeInUpSmall in 2 seconds after a 1 second delay</span>
```

### Options
'[]Small' animations have 3 options: 10% (default), 20% and 30%.

```js
<h2 class="animated-1 fadeInDownSmall">This element will fadeInDownSmall by 10%</h2>

<h2 class="animated-1 fadeInDownSmall30">This element will fadeInDownSmall by 30%</h2>
```

'.animated' and '.delay' have 5 options: -05, -01, -02, -03, -04.
```js
<h2 class="animated-05 fadeInDownSmall">This element will fadeInDownSmall in 0.5 seconds</h2>

<h2 class="animated-02 delay-04 fadeInDownSmall">This element will fadeInDownSmall in 2 seconds after a 4 seconds delay</h2>
```


### Todo
* Add more animations.
* Add host classes to use inside webcomponents.