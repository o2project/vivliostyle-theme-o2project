# Vivliostyle Theme O2 Project

Vivliostyle theme for O2 Project

## Install

```bash
npm install --save @o2project/vivliostyle-theme-o2project
# or
yarn add @o2project/vivliostyle-theme-o2project
```

## Use

In `vivliostyle.config.js`:

```js
module.exports = {
  theme: '@o2project/vivliostyle-theme-o2project',
};
```

## Dev

- **example**: Contain sample manuscripts using your theme.
- **src**: You can add files for specific use (print, screen, cover, toc, preface, ...) and apply them at `theme` `entry > theme` in vivliostyle.config.js. Partial files whose names begin with `_` will be ignored.

### Commands

Run `vivliostyle preview` to preview your `theme_*.css`.

To watch file changes, use `dev` script.

```bash
npm run dev
# or
yarn dev
```

You can specify your CSS file and manuscript file for preview in vivliostyle.config.js:

```js
module.exports = {
  language: 'en',
  theme: 'print.css',
  // theme: 'theme_screen.css',
  entry: [
    'example/default.md',
    // and more...
  ],
};
```

Run `vivliostyle-theme-scripts validate` before publishing your package.

```bash
npm run validate
# or
yarn validate
```
