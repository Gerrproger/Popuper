Popuper
=======

JS library of interacting popups

Now available only version for [jQuery](http://jquery.com/)


## Usage
Include the relevant files in the `<head>` of your document:
```html
<link type="text/css" href="style/popuper.css" rel="stylesheet" media="all" />
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script type="text/javascript" src="js/popuper.js"></script>
```

<br/>
Add class `popuper` to the activation link. 
Also add `data-target` attribute that includes `id` of the popup.
```html
<a href="#" class="popuper" data-target="myPopup">Open popup</a>
```

<br/>
Add class `popup` to the popup block and don't forget an `id`.
```html
<div id="myPopup" class="popup">
   <a href="#" class="popup-closer"></a>
</div>
```
Also you can insert link with the `popup-closer` class whitch will close this popup on click.

<br/>
You can add `data-shift` attribute to the popup block to turn on or off the vertical shift (default is `true`).
```html
<div id="myPopup" class="popup" data-shift="false">
   <a href="#" class="popup-closer"></a>
</div>
```

You can add `data-scroll` attribute to the popup block to enable automatic scrolling to the popup location (default is `false`).
```html
<div id="myPopup" class="popup" data-scroll="true">
   <a href="#" class="popup-closer"></a>
</div>
```

You can add `data-noclose` attribute to the popup block to not hide previosly opened popup (default is `false`).
```html
<div id="myPopup" class="popup" data-noclose="true">
   <a href="#" class="popup-closer"></a>
</div>
```


<br/>
Now you just need to initialize the library.
```javascript
$(function(){
  popuper.init();
});
```

## Api

### init
Use this to initialize or reinitialize the library. It will automatically find all aactivation links.
```javascript
  popuper.init('myPopup', false, true, true);
```
You can also pass the parametr with an `id` of the popup to immediatly open it.

Pass the second argument to set the vertical shift of the popup or not (default is `true`)

Pass the third argument to enable automatic scrolling to the popup or not (default is `false`)

Pass the fourth argument to close the previosly opened popup or not (default is `false`)

### open
Opens popup with the passed `id`.
```javascript
  popuper.open('myPopup', true, false, false);
```
Note that you first need to initialize the library!

### close
This method will close all popups.
```javascript
  popuper.close();
```
