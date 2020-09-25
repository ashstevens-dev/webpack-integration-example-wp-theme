# webpack-integration-example-wp-theme
Simple example template illustrating how you can modify a WordPress theme to incorporate Webpack. Includes SASS and JS compilation/bundling/minification, the use of Babel to transpile JS code so it's compatible with older browsers, and the inclusion of Font Awesome. It also shows you how to unhook Gutenberg styles from being loaded so you can import them into your SASS file instead, to further save on performance in your site.

## Getting Started
1. Add package.json to your theme root and edit the name and author values as appropriate
2. Analyze/edit your style.css file. It should only have the header comment section at the top. Any other styles should be placed into a .scss file. You can add in nesting, mixins, partials, functions, etc. to harness the full power of Sass later. It will work as-is (with plain CSS)
3. Reference the scss file in this example. It illustrates how to include background images on elements; and it has the line you need to use to include Gutenberg's block styles
4. Ensure your theme has a matching directory structure to what's illustrated here (Sass in src/assets/styles, JS in src/assets/scripts, images referenced by the stylesheet in src/assets/images)
5. Add the index.js file into the src/ directory and update the imports to include your stylesheets/javascript files (don't touch the Font Awesome block *unless* you want to remove it or modify it to utilize tree-shaking methods)
6. Edit your functions.php file as illustrated. Modify your enqueues to simply include the bundled css and js (and any additional scripts/styles if you choose not to bundle them with the rest). Add the block of code to unhook Gutenberg
7. If you need/want multiple bundles, edit the webpack.config.js file to add more entries (see line 16) and then create the additional js file(s) and include them in src/

## Install the packages
``` npm install ```

## Run Webpack in development mode (unminified output)
``` npm run build ```

## Run Webpack in production mode
``` npm run dist ```

## Run Webpack in watch mode
``` npm run watch ```

This will recompile code as you go, making a full build unnecessary while you're developing/making updates.

## Use Font Awesome in your theme
Include the ```<i>``` tag inline where you want it to appear in pages, posts, theme files, etc. Reference the online library to find the free icon you want to add https://fontawesome.com/icons?d=gallery&m=free

## :sparkles: Moving on
There are many other Webpack features I did not include or go over in this example including code-splitting, working with other types of files (JSON, locally-included fonts, SVG images, etc.), linting, and more. This is just a very simple example that could either be expanded & improved upon, modified to work with other project builds (non-WordPress), or used as-is for simple WordPress website projects.
