# modstrap-fancy

Adaptation for jQuery.fancybox.

## Installation

```shell script
npm i https://github.com/callisto2410/modstrap-fancy.git#v1.0.0
```

## Usage

```javascript
import Fancy from "@modstrap/fancy";

$('.button').on('click', () => {
    Fancy.open({
        src: $('.content'),
        type: 'html',
        opts: {
            caption: 'Content description...'
        }
    });
});
```
