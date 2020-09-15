# webpack-integration-example-wp-theme
Simple example template illustrating how you can modify a WordPress theme to incorporate Webpack. Includes SASS and JS compilation/bundling/minification, the use of Babel to transpile JS code so it's compatible with older browsers, and the inclusion of Font Awesome. It also shows you how to unhook Gutenberg styles from being loaded so you can import them into your SASS file instead, to further save on performance in your site.

## Getting Started
1. Add package.json to your theme root and edit the name and author values as appropriate
2. Edit your style.css file. It should only have the header comment section at the top. Any other styles should be placed into a .scss file. You can add in nesting, mixins, partials, functions, and clean up the stylesheet to use the full power of Sass later. It will work as is.
3. Ensure your theme has a matching directory structure to what's illustrated here (Sass in src/assets/styles, JS in src/assets/scripts, images referenced by the stylesheet in src/assets/images)
4. Add the index.js file into the src/ directory and update the imports to include your stylesheets/javascript files (don't touch the Font Awesome block *unless* you want to remove it or modify it to utilize tree-shaking methods)
5. Edit your functions.php file as illustrated here. Add the block of code to unhook Gutenberg. Modify your enqueues to simply include the bundled css and js (and any additional scripts/styles if you choose not to bundle them with the rest)
6. If you need/want multiple bundles, edit the webpack.config.js file to add more entries (see line 16)

## Install the packages
``` npm install ```

## Run Webpack in development mode (unminified output)
``` npm run build ```

## Run Webpack in production mode
``` npm run dist ```

## Run Webpack in watch mode. It will recompile code as you go, making a full build unnecessary while you're developing/making updates
``` npm run watch ```

## Use Font Awesome in your theme
Include the <i> tag inline where you want it to appear in pages, posts, theme files, etc. Reference the online library to find the free icon you want to add https://fontawesome.com/icons?d=gallery&m=free