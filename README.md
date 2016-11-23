# choose-bumps
[![Build Status](https://travis-ci.org/crsten/tasty-toast.svg?branch=master&style=flat-square)](https://travis-ci.org/crsten/tasty-toast)
[![npm](https://img.shields.io/npm/dt/tasty-toast.svg?style=flat-square)](https://www.npmjs.com/package/tasty-toast)
[![Bower](https://img.shields.io/bower/v/tasty-toast.svg?style=flat-square)]()
[![npm](https://img.shields.io/npm/v/tasty-toast.svg?style=flat-square)](https://www.npmjs.com/package/tasty-toast)
[![npm](https://img.shields.io/npm/l/tasty-toast.svg?style=flat-square)]()

The world's tastiest notification widget (Part of the tasty framework)

##Demo

You can find a small [demo here](http://crsten.github.io/tasty-toast/).

##Installation

You can get it on npm.

```shell
npm install tasty-toast --save
```

Or bower, too.

```shell
bower install tasty-toast --save
```

If you're not using either package manager, you can use `tasty-toast` by downloading the [files in the `dist` folder](dist).

####Including the JavaScript

Place `tasty-toast` in the end of `<body>`.

####Including the CSS

Place [`dist/tasty-toast.css`](dist/tasty-toast.css) or [`dist/tasty-toast.min.css`](dist/tasty-toast.min.css) in your document.

#Usage

tasty-toast provides the easiest possible API to make notifications breeze in your applications.

##`Tasty.Toast(options)`

You can provide `options` to customize `tasty-toast`. Here's an **overview of the default values**.

```js
Tasty.Toast({
  type: '', //['error','success'] are possible values
  icon: '', //Insert your image here
  title: 'Hey there!',
  content: `You didn't fill out the content.`,
  duration: 6000,
  onclick: null
});
```

The options are detailed below.

####`options.type`

The `options.type` property will give the notification the correct appearance.
By default `tasty-toast` has no type. You can set the type of notification by setting the `options.type` property:

```js
Tasty.Toast({
  type: 'success'
});
```

*`options.type` accepts 'success' or 'error'*

####`options.icon`

If you want to show an icon beside your notification just pass in an URL to an image like this:

```js
Tasty.Toast({
  icon: 'http://MYAWESOMEPAGE.com/COOLICON.png'
});
```

*`options.icon` accepts a string as input and ignores all other types.*

####`options.title`

By default `tasty-toast` has `"Hey there"` as the title text. You can change the title text by sending them in to the options at initialization:

```js
Tasty.Toast({
  title: 'Hey there, something awsome happened!'
});
```
*`options.title` accepts a string as input and ignores all other types.*

####`options.content`

By default `tasty-toast` has `"You didn't fill out the content."` as content. You can change the content by sending them in to the options at initialization:

```js
Tasty.Toast({
  content: 'You have recieved a <b>gift</b>.'
});
```

*`options.content` accepts a string as input. You can use HTML here... just sayin*

####`options.duration`

By default `tasty-toast` has a duration of 6000 miliseconds. You can set your own duration by setting the duration property at initialization:

```js
Tasty.Toast({
  duration: 10000 // show me 10 seconds please
});
```

*`options.duration` accepts a number as input. The number represents the duration in miliseconds*

####`options.onclick`

With `options.onclick` you can set a custom action when the notification object is clicked!

```js
Tasty.Toast({
  onclick: function(){
    console.log('I do stuff...')
  }
});
```

*`options.onclick` accepts a function as input*

---

**Great shoutout to [Kent C. Dodds](https://github.com/kentcdodds) for providing great tutorials on [how to write an open source library](https://egghead.io/series/how-to-write-an-open-source-javascript-library)**
