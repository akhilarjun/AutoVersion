# AutoVersionImporter
This plugin will help you import JS files and CSS files with a timestamp appended to them. This will prevent the same being loaded from cache.

### Steps

Include the js file into your page.

```html
<script src='..path-to-js/autoVersionImport.js'></script>
```

Now you could create a list of fles to be imported and pass them to the importer to import them.

```javascript
//Edited For Brewity
var listOfScripts = [
  "js/sampleScript.js",
  "js/sampleScript2.js"
],listOfStyles = [
  "css/sampleStyle.css"
];
var jsImporter = new AutoVersion(FileType.JAVASCRIPT,listOfScripts);
var cssImporter = new AutoVersion(FileType.CSS,listOfStyles);
cssImporter.importAll();
jsImporter.importAll();
//Edited For Brewity
```

Currently only two types of files are being supported

```javascript
FileType.JAVASCRIPT;
FileType.CSS;
```
