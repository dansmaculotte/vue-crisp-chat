# vue-crisp-chat

[![Latest Version on NPM](https://img.shields.io/npm/v/dansmaculotte/vue-crisp-chat.svg?style=flat-square)](https://npmjs.com/package/dansmaculotte/vue-crisp-chat)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![Build Status](https://img.shields.io/travis/dansmaculotte/vue-crisp-chat/main.svg?style=flat-square)](https://travis-ci.org/dansmaculotte/vue-crisp-chat)

Vue.js plugin for Crisp Chat

[Crisp Chat Javascrip SDK Documentation](https://help.crisp.chat/en/article/how-to-use-dollarcrisp-javascript-sdk-10ud15y/)

## Installation

You can install the package via yarn:

```bash
yarn add @dansmaculotte/vue-crisp-chat
```

or npm:

```bash
npm install @dansmaculotte/vue-crisp-chat --save
```

## Setup

```js
import Vue from 'vue'
import CrispChat from '@dansmaculotte/vue-crisp-chat'

Vue.use(CrispChat, {
  websiteId: 'YOUR_CRISP_CHAT_WEBSITE_ID',
  disabled: true,
  hideOnLoad: true
})
```

### Options

#### `disabled`

`disabled` option allows you to prevent automatic script loading, to comply with GDPR.

You can manually load it by calling `this.$crisp.load(YOUR_CRISP_CHAT_WEBSITE_ID)`.

#### `hideOnLoad`

When Crisp Chat is loaded it automatically shows the widget, to prevent this you can set to `true` this option so you can manually show it after.

### Usage

You can use any method coming from the official documentation.
Every methods are accessible from `$crisp` object.

For example:
```js
Vue.$crisp.do('chat:open')
// In a vue instance
this.$crisp.do('chat:open')
```

You can also listen to `loaded` event emitted on script load.

For example:
```js
this.$crisp.$on('loaded', (event) => {
  console.log('crisp chat loaded')
})
```

### Testing

```bash
yarn test
```

### Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

### Security

If you discover any security related issues, please contact [Gaël Reyrol](https://github.com/gaelreyrol) instead of using the issue tracker.

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

#
## Credits

- [Gaël Reyrol](https://github.com/gaelreyrol)
- [All Contributors](../../contributors)
