# Reading For Gender Bias - Web front end

## Table of contents 
* [Introduction](#Introduction)
* [Technologies](#Technologies)
* [Installation and Usage](#Installation) 
* [Credits](#Credits) 

## Introduction
This project is a web-based user interface for [Reading for Gender Bias](https://github.com/glam-lab/gender-bias). 
This project is currently under active development by members of [GLAM Lab at Whitman College](https://github.com/orgs/glam-lab/). 

## Technologies
* [Vue Framework](https://vuejs.org/v2/guide/#:~:text=Vue%20(pronounced%20%2Fvju%CB%90%2F%2C,up%20to%20be%20incrementally%20adoptable)) for client-based web applications.
* [Puppeteer, mocha, chai](https://medium.com/@ankit_m/ui-testing-with-puppeteer-and-mocha-part-1-getting-started-b141b2f9e21) for automated end-to-end testing. 
* [Yarn](https://classic.yarnpkg.com/en/docs/) for package management.

## Installation and Usage
### Linux or MacOS 

#### To install the back-end 
```
git clone https://github.com/gender-bias/gender-bias
cd gender-bias
pip3 install -e .
```
NOTE: The last line in the above snippet installs this library in "editable" mode, which is probably fine while the library is in a state of flux.

#### To install packages 
To set up the project, make sure [`yarn` is installed](https://classic.yarnpkg.com/en/docs/install/#mac-stable) and then use it to install the packages for this project:
```
yarn install
```

### Windows
#### Necessary Packages before installing the project
Make sure you have [`NodeJS` is installed on your computer](https://nodejs.org/en/download/). `npm` comes with NodeJS, so you don't have to install `npm` on its own. 
You can also install [`yarn`](https://classic.yarnpkg.com/en/docs/install/#windows-stable). Finally, make sure you have [`pip3`](https://vgkits.org/blog/pip3-windows-howto/) on your computer, and you have [Python 3](https://www.python.org/downloads/windows/). 
#### Installing the back-end
1. Clone the backend repoistory through an IDE or from Github. 
2. Using windows terminal, 
```
cd  gender-bias 
pip3 install -e .  
```

### To run the front-end server (Windows/MacOS/Linux)
Once installed, run the front-end server as follows:

```
yarn serve 
```
OR a
```
npm run server
```
The server runs at `http://localhost:8080` by default.

### To run tests

Before running tests, start the back-end server with `genderbias-server`, or start a fake server with `yarn test-serve`.

To run the entire test suite, run `yarn test`.

To run a single test, run `yarn test --grep 'test name'`, specifying the name of the test you wish to run.

You can find the tests in the `test` directory. The `Component.spec.js` files depend on `bootstrap.js`.

### To write tests

The tests are divided into files by Vue component.

They employ the Mocha test framework and the Puppeteer and Chai libraries. Puppeteer allows one to simulate user events in the browser and Chai is an assertion library.

When you create a `.spec.js` test file, it will be called by `bootstrap.js` when you run the tests.

In the test files, `describe` blocks demarcate the tests by state, such as the page after the opening of the page, the clicking of a button, the typing of text into the textarea,
or hovering over a style class. These state-changing events are handled with `before` and `after` blocks. 

The tests run asynchronously, which is indicated by the `async` and `await` keywords. This is because we don't know how long each test will take to complete, so it is more efficient for them to run concurrently. The `await` keyword tells the line to run only after the previous asynchronous work within the function has finished running, and can only be used in functions that are prefaced with `async`.

The convention is to define variables for style-class-selectors necessary for testing in `bootstrap.js`; again, these are organized by component.

### To lint and fix files
Run 
```
yarn lint
```

## Contributors
- Mollie Marr @molliem conceived the project and guided its developement.
- Jordan Matlesky @j6k4m8 started the project and mentored the GLAM team.
- Janet Davis @ProfJanetDavis (Mentor for the GLAMLab Developers, summer 2020)
- Ahmed Elsayed @elsayeaa (Main Developer, summer 2020)
- Dylan Wu @dylanjwu (Main Developer, summer 2020)
- Kalilou Ali Kadiri @kaliloua7 (Main Developer, summer 2020)
- Nidhi Jaltare @nidhi2509 (Main Developer, summer 2020)
- Zoë Hill @Life1999 (Main Developer, summer 2020)
