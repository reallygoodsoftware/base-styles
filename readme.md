# Base Styles.css

- Base Styles is 1. A CSS only component library and 2. A scaffold for organizing your CSS.
- This repository houses the library itself. For more info see the [Base Styles Docs](https://base-styles.com).

# Why CSS Only?

- 90% of commonly needed components can be achieved with CSS alone, and this is growing. 
- A further 5% can be achieved with "add this class to this element when clicked/hovered".
- A very small percentage of components require integration with a frontend/backend. 
- Rather than rewriting the same component CSS for every new framework, why not build framework level component libraries on top of a common CSS base?

## Developing
- Make changes to `base-styles.css` as you see fit. 
- Run `node utils/create-version.js` when finished to create a new version file. 
- Add notes to the changelog. 

## TODO

> The library is quite rough around the edges at the moment. 

- Fix naming conventions for ui-tooltip (break apart the class)
- Reduce the amount of title pairs.
- Clean up variables for ui-styled-text
- Add more variants for modals
- Add CSS nesting polyfill (currently only works in 87% of browsers)