---
title: 'Vivliostyle Theme Example'
body:
  class: 'foo bar'
vfm:
  hardLineBreaks: false
---

# Title

This sample is based on [VFM (Vivliostyle Flavored Markdown) document](https://vivliostyle.github.io/vfm/vfm). If you need more information, please check the document.

## Code

```javascript
// MIT License
// Copyright (c) Facebook, Inc. and its affiliates.
export function lazy<T>(ctor: () => Thenable<{ default: T, ... }>): LazyComponent<T, Payload<T>> {
  const payload: Payload<T> = {
    // We use these fields to store the result.
    _status: Uninitialized,
    _result: ctor,
  };

  const lazyType: LazyComponent<T, Payload<T>> = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer,
  };

  if (__DEV__) {
    // In production, this would just set it on the object.
    let defaultProps;
    let propTypes;
    // $FlowFixMe
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get() {
          return defaultProps;
        },
        set(newDefaultProps) {
          console.error(
            'React.lazy(...): It is not supported to assign `defaultProps` to ' +
              'a lazy component import. Either specify them where the component ' +
              'is defined, or create a wrapping component around it.',
          );
          defaultProps = newDefaultProps;
          // Match production behavior more closely:
          // $FlowFixMe
          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true,
          });
        },
      },
      propTypes: {
        configurable: true,
        get() {
          return propTypes;
        },
        set(newPropTypes) {
          console.error(
            'React.lazy(...): It is not supported to assign `propTypes` to ' +
              'a lazy component import. Either specify them where the component ' +
              'is defined, or create a wrapping component around it.',
          );
          propTypes = newPropTypes;
          // Match production behavior more closely:
          // $FlowFixMe
          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true,
          });
        },
      },
    });
  }

  return lazyType;
}
```

### with caption

```javascript:app.js
function main() {}
```

### with caption and title

```javascript title=app.js
function main() {}
```

## Footnotes

VFM is developed in the GitHub repository[^1].
Issues are managed on GitHub[^issues].
Footnotes can also be written inline^[This part is a footnote.].

[^1]: [VFM](https://github.com/vivliostyle/vfm)
[^issues]: [Issues](https://github.com/vivliostyle/vfm/issues)

## Frontmater

(You can define metadata on the top of the Markdown file. Try to set `lang` option `ja` in the frontmatter! If you need more information, please check [Frontmatter part in VFM document](https://vivliostyle.github.io/vfm/vfm##frontmatter).)

## Hard new line

(Try to set the `hardLineBreaks` option `true` in the frontmatter!)

はじめまして。

Vivliostyle Flavored Markdown（略して VFM）の世界へようこそ。
VFM は出版物の執筆に適した Markdown 方言であり、Vivliostyle プロジェクトのために策定・実装されました。

## Image

![](<./assets/Logo%20(Mark%20+%20Type).png>)

with width setting

![](<./assets/Logo%20(Mark%20+%20Type).png>){width=300}

## List

順序付きリスト

1. はじめまして
2. こんにちは

順序なしリスト

- はじめまして
- こんにちは

### with caption and single line

![Vivliostyle Logo](<./assets/Logo%20(Mark%20+%20Type).png>)

![Vivliostyle Logo](<./assets/Logo%20(Mark%20+%20Type).png> 'distributed on the official website'){id="image" data-sample="sample"}

text ![Vivliostyle Logo](<./assets/Logo%20(Mark%20+%20Type).png>)

## Math equation

inline: $x = y$

display: $$1 + 1 = 2$$

## Raw HTML

<div class="custom">
  <p>Hey</p>
</div>

#### with Markdown

<div class="custom">

- hoge
- fuga

</div>

## Ruby

This is {Ruby|ルビ}

### Escape pipe in ruby body

{a\|b|c}

## Sectionization

## Plain

## Introduction {##intro}

## Welcome {.title}

# Heading level 1

This is text.

## Heading level 2

This is text.

### Heading level 3

This is text.

#### Heading level 4

This is text.

##### Heading level 5

This is text.

###### Heading level 6

This is text.

## The looooooooooooooooooooooooooooooooooooooooooooooooooooooog headings

## 超スーパーウルトラハイパーすごくとても長すぎて読み切れない日本語で書かれた見出し

背景画像の拡大縮小[^4]

[^4]: [https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Backgrounds_and_Borders/Resizing_background_images](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Backgrounds_and_Borders/Resizing_background_images)

> ## Not Sectionize
