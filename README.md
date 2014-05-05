#k-description Plugin jQuery

A simple plugin for descriptions.

###[Examples](http://filipelinhares.github.com/k-description)
---
#Browser Support

- Internet Explorer 6+
- Mozilla Firefox 3.6+
- Google Chrome 4+
- Safari 5+
- Opera 10.10+

---
#Dependencies

- [jQuery](http://www.jquery.com)
- [jQuery Easing](http://gsgd.co.uk/sandbox/jquery/easing) *optional*

---
##How to use
###`$('selector').description({your-options});`
---
#Your options
###-  kheight
The height of your description
-	Default value: 100px.

***Caution. Set height equal your parent element height.***

Syntax:

```
   $('selector').description({
		kheight : 'value'
    });
```
---
###-  kwidth
Define a width for your description

-	Default value: 100%.

Syntax:
```
	$('selector').description({
		kwidth: 'value'
    });
```
---
###-  kmarginTop

Margin top of your description to your parent element.

-	Default value: 50px.

Syntax:
```
	$('selector').description({
    	kmarginTop : 'valorEmPx'
    });
```
---
###-  kduration

Duration of the animation.

-	Default value: 1000 ms;

Syntax:
```
	$('selector').description({
		duracaoDescricao : 'value-ms'
    });
```
---
###-  kin
Initial direction of your description.

Acc values: up - down

-	Default value down.

Syntax:

```
	$('selector').description({
		kin : 'up-or-down'
	});
```
---
###-  kout

End direction of your description.

Acc values: up - down

-	Defautl value: down.

Syntax:
```
	$('selector').description({
		kout : 'up-or-down'
    });
```
---
###-  kopacity - ***(Check browser support in [Can i use Opacity](http://caniuse.com/css-opacity))***

Opacity of your description.

-	Acc values: 0.1 - 1.

-	Default Value 1.

Syntax:
```
	$('selector').description({
		 kopacity	 : 'value'
     });
```
---
###-  kcontent

-	The text of your description.

-	Default value: 'k-description jQuery'.

Syntax:
```
	$('selector').description({
    	 kcontent : 'value'
     });
```
---
###-  kease

-	Default value: ''

Syntax:
```
	$('selector').description({
		kease : 'value'
    });
```

---

#Style
###Window Description
For this a class called `kp` as add in `p` element.

e.g:

```
.kp{
	background: #3f4353;
}
```

###The text
Equal a window, just add style to `.kcontent`.

e.g:

 ```
 .kcontent{
 	color: #fff;
    font-weight: bold;
 }
 ```

---
Author: Filipe Linhares
