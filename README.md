Importer le module animation et le module de transition souhaité

import { animated } from "../../mil/milv3/mil-animation/animated";
import { fadeInDown } from "../../mil/milv3/mil-animation/fadeInDown";

Ajouter les modules au style

    static get styles() {
      return [
        animated,
        fadeInDown
            ]}

Ajouter les classes à l'élément

    <h2 class="animated-1 delay-05 fadeInDown">Welcome</h2>

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

### Todo
* Add more animations.
* Add host classes to use inside webcomponents.