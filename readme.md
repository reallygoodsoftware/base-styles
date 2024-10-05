# Base Styles

- Base Styles is 1. A CSS only component library and 2. A scaffold for organizing your CSS.
- This repository houses the library itself. For more info see the [Base Styles Docs](https://base-styles.com).

## The Thinking Behind Base Styles

- 90% of commonly needed components can be achieved with CSS alone, and this is growing. 
- A further 5% can be achieved with "add this class to this element when clicked/hovered".
- Why not build framework level component libraries on top of a common CSS base, rather than every component library author rewriting their CSS from scratch?
- Said another way, "Base Components for Laravel" is technically already 90% written (in base-styles.css). To finish it off, a Laravel developer would need to figure out the "Laravel Way" to wire up the few components that rely on backend functionality, like modals and toasts. 
- If you are want to build a component library for your framework, please feel free to use Base Styles as a starting point. 

## Existing Integrations

- **Rails**: [H1Rails](https://h1rails.com) leverages Base Styles for its CSS, with one-liner snippets to trigger modals, toasts, and more.

## Developing
- Make changes to `base-styles.css` as you see fit. 
- Run `node utils/create-version.js` when finished to create a new version file. 
- Add notes to the changelog. 

## TODO


- Fix naming conventions for ui-tooltip (break apart the class)
- Reduce the amount of title pairs.
- Clean up variables for ui-styled-text.
- Add more variants for modals.
- Add CSS nesting polyfill (currently only works in 87% of browsers).
- Use focus-within for floating labels (can be broken with password managers currently).