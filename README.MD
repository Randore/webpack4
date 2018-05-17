## Webpack 4 starter-kit


### Folder Structure
```
dist
src
  css (or) scss
     main.scss
  img
  js
     main.js
  index.html
  index.js
webpack.config.js
package.json
package-lock.json
.babelrc
.gitignore
```



### Installation.

*` npm install `* to install all dependencies
 
 
 
### npm scripts.
 ```
    "start": "webpack-dev-server --color --hot --inline --mode production",
    "dev"  : "webpack --mode development",
    "build": "webpack --mode production"
```


#### Notes:


Webpack 4: No need to declare entry and output paths in webpack.config.js file.

#### Loader & Plugins

Basic loader and plugin are already added to the package. Please check and modifiy the packages before installing.


#### vulnerability
As of this upload - node-sass as known vulnerabilities | waiting for an update.

Feel free to update modify, open issues, raise PR's
