# UI Seed - DEPRECATED in favour of: https://github.com/developmentseed/ui-library-seed

The following guide only explains how to include `ui-seed` in a new project.

For information on how to develop `ui-seed` checkout the [DEVELOPMENT.md](DEVELOPMENT.md)  

---

Style guide and UI components library that aims to standardize the look and feel across all Development Seed related applications, while defining coding best practices and conventions.

Install it as an `node module`: (Not available on `npm`, use direct link)
```
yarn add git+ssh://git@github.com/developmentseed/ui-seed.git#v0.3.1-beta
```
For the most recent version omit the tag.

**Note:**
This UI system makes some assumptions which are described below for each of the elements.  

## Overview

The shared assets are all in the `assets` directory. It is organized as follows:

### assets/scripts
Utility libraries and shared components.

**USAGE**  
Use as any node module:
```js
import { Dropdown, user } from 'ui-seed';
```
If you want to minimize bundle size you can also include the components directly.  
Bindings exported from `ui-seed` are also available in `ui-seed/assets/scripts`

### assets/styles
Requires [Bourbon](https://github.com/lacroixdesign/node-bourbon) and [Jeet](https://github.com/mojotech/jeet).

**INSTALLATION**  
Add the module path to the `includePaths` of gulp-sass. Should look something like:
```js
.pipe($.sass({
  outputStyle: 'expanded',
  precision: 10,
  includePaths: require('node-bourbon').with('node_modules/jeet/scss', require('ui-seed/gulp-addons').scssPath)
}))
```

The `ui-seed` uses [Open Sans](https://goo.gl/FZ0Ave) (General) and [Lato](https://fonts.google.com/specimen/Lato) (headings) which are available on [Google Fonts](https://fonts.google.com).  
It needs to be included in the app:
```
<link href="https://fonts.googleapis.com/css?family=Lato:700,700i|Open+Sans:300,300i,400,400i,700,700i" rel="stylesheet" />

```

**USAGE**  
Now you can include it in the main scss file:
```scss
// Bourbon is a dependency
@import "bourbon";

@import "jeet";

@import "ui-seed";
```

### assets/icons
The `ui-seed` includes svg icons that are compiled into a webfont and included in the styles.  
To use the icons, check the `_ui-seed-icons.scss` for the class names.

The icons are compiled into a webfont using [collecticons-processor](https://github.com/developmentseed/collecticons-processor) allowing the icons to be used as `scss` extents:

```
<button class="bttn-add">Add</button>
```
```
.bttn-add:before { // or .bttn-add:after {
  @extend %uisi-share;
}
```

or inline:
```
<button><i class="uisi-share"></i> Share</button>
```

### assets/graphics
Graphics that are to be shared among projects.

**INSTALLATION**  
Add the `graphicsMiddleware` to browserSync. This is only to aid development.  
Should look something like:
```js
browserSync({
  port: 3000,
  server: {
    baseDir: ['.tmp', 'app'],
    routes: {
      '/node_modules': './node_modules'
    },
    middleware: require('ui-seed/gulp-addons').graphicsMiddleware(fs) // <<< This line
  }
});
```
*Basically every time there's a request to a path like `/assets/graphics/**`, browserSync will check in the `ui-seed` folder first. If it doesn't find anything it will look in the normal project's asset folder.*

You also need to ensure that the images are copied over on build.
This ensures that the graphics are copied over when building the project.
```js
gulp.task('images', function () {
  return gulp.src(['app/assets/graphics/**/*', require('ui-seed/gulp-addons').graphicsPath + '/**/*'])
    .pipe($.cache($.imagemin({
```

**USAGE**  
Just include the images using the path `assets/graphics/[graphic-type]/[graphic-name]`.  
All available images can be found [here](assets/graphics/).
