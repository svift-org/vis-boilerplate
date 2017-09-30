# Vis Boilerplate

This boilerplate script is used to create the basic structure of a new vis module

## How to

1. First create a new empty repo name it according to the SVIFT naming conventions:

vis-NAMEOFVIS-module

NAMEOFVIS should be one word, all lower case, no underscore, minus, dashes etc.
Make sure the name is not already taken

2. Use the boilerplate to create the basic structure in the new repo, therefore, use script as follows:

```
cd /to-boilerplate-folder/
node index.js PATH_TO_NEW_EMPTY_REPO NAMEOFVIS GIT_URL "YOUR NAME" "NAME OF VIS"
```

Example:

```
node index.js /Users/max/dev/vis-barchart-module barchart git@bitbucket.org/svift/vis-barchart-module.git "Max Mustermann" "Barchart"
```

3. Install dependencies

```
cd /vis-NAMEOFVIS-module-folder/
npm install
```

## Be aware

The new vis will automatically be under MIT license.

## Result

The script should create the following structure in the repo folder:

```
repo-folder/
├── node_modules/
│   └── ...
├── tests/
│   └── index.html
├── .gitignore
├── data.json
├── index.js
├── build.js
├── package.json
└── style.scss
```

### node_modules

This is created by npm and should contain node-sass / jshint and their dependencies

### tests

This folder contains a simple html file, which can be used for testing the visualisation

### .gitignore

basic ignore file for ignoring node_modules

### data.json

This json should reflect all properties the visualisation requires as well as the desired data structure

### index.js

This is where the magic happens. A basic structure is already inserted:

module.setup > called one time for initialising the vis
module.resize > called after a resize event (also once called after setup)
module.timeline > object containing the animation steps (if required)

### build.js

no need to edit this one, this is simply compiling the stylesheet for the tests

### package.json

the visualisations package.json, if you like add a description

### style.scss

add styles specific to the visualisation.
Note: You don't need to add a vis specific id/class, this is handled by the global framework, simply add styles as if the visualisation is the only thing on the page, try to keep class-names short.

## Developing a new vis

Simply work in index.js, do not change the function names initially constructed, feel free to add as many classes as you like.
In order to apply the styles to your visualisation in the tests/index.html you need to compile the scss file:
```
npm run build
```

In order to create clean and well written modules, jshint is used for linting:
```
npm run lint
```

## Deploying a new vis

If the visualisation works fine, push it to the repo and add it to the svift-frontend repo. The only thing you need to do is add it to the dependencies in package.json:

```
...
"dependencies":{
  ...
  "svift-vis-NAMEOFVIS": "git+ssh://GIT_URL"
}
...
```

Afterwards run the build script inside the svift-frontend repo, which should generate new minified libraries containing the new visualisation module.


## How vis works

If you want to know more about the underlying mechanics of the vis system, check out the vis-module, which serves as a prototype for all the vis modules