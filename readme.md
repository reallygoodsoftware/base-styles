# Base Styles.css

Base Styles is 1. A CSS only component library and 2. A scaffold for organizing your CSS.

## How It Works

`base-styles.css` is just a big vanilla CSS file that you can import into your app. 

Import 2 files into your cobebase: Firstly, the core `base-styles.css` file, which is universal and should not be changed - and secondly, a `base-styles-custom.css` file, which is where you'll put all of your customizations and overrides.

```
<link href="https://cdn.base-styles.com/base-styles/0.0.1.css<%= cache_buster %>" rel="stylesheet">
<link href="/stylesheets/base-styles-overrides.css<%= cache_buster %>" rel="stylesheet">
```

This repository houses the library itself. For more info see the [Base Styles Docs](https://base-styles.com).

## TODO

- Fix naming conventions for ui-tooltip (break apart the class)
- Reduce the amount of title pairs.
- Clean up variables for ui-styled-text
- Add more variants for modals