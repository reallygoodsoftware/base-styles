# Base Styles.css

Base Styles is a set of CSS classes that does 3 things: 
1. Helps you to keep your CSS structured and organized as your product grows.
2. Helps you to maintain visual consistency across common UI elements.
3. Gives you lego blocks to compose new features with.

## How It Works

`base-styles.css` is just a large, vanilla CSS file, that you can import into your app. 

Import 2 files into your cobebase: Firstly, the core `base-styles.css` file, which is universal and should not be changed - and secondly, a `base-styles-custom.css` file, which is where you'll put all of your customizations and overrides.

```
<link href="https://cdn.base-styles.com/base-styles/0.0.1.css<%= cache_buster %>" rel="stylesheet">
<link href="/stylesheets/base-styles-overrides.css<%= cache_buster %>" rel="stylesheet">
```

This repository houses the library itself. For more info see the [Base Styles Docs](https://base-styles.com).