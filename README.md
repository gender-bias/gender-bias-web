# Reading For Gender Bias - FrontEnd (GEL team)
## Table of contents 
* [Introduction](#Introduction)
* [Technologies](#Technologies)
* [Installation and Usage](#Installation) 
* [Credits](#Credits) 


## Introduction
    This project is a web-based user interface for [Reading for Gender Bias](https://github.com/glam-lab/gender-bias). 
    This project is currently under active development by member of the GLAM Lab at Whitman College to create an accessible tool. 

## Technologies
* [Vue Framework](https://vuejs.org/v2/guide/#:~:text=Vue%20(pronounced%20%2Fvju%CB%90%2F%2C,up%20to%20be%20incrementally%20adoptable.)
* [Puppeteer, mocha, chai](https://medium.com/@ankit_m/ui-testing-with-puppeteer-and-mocha-part-1-getting-started-b141b2f9e21) for testing. 
* [yarn](https://classic.yarnpkg.com/en/docs/)/[npm](https://docs.npmjs.com/) as package managers 

## Installation and Usage
### To install the back-end 
```
git clone https://github.com/gender-bias/gender-bias
cd gender-bias
pip3 install -e .
```
> NOTE: The last line in the above snippet installs this library in "editable" mode, which is probably fine while the library is in a state of flux.

### To install packages 
To set up the project, make sure [`yarn` is installed](https://classic.yarnpkg.com/en/docs/install/#mac-stable) and then use it to install the packages for this project:
```
yarn install
```

### To run the front-send server
Once installed, run the front-end server as follows:

```
yarn serve 
```

The server runs at `http://localhost:8080` by default.

### To run tests

Before running tests, start the back-end server with `genderbias-server`, or start a fake server with `yarn test-serve`.

To run the entire test suite, run `yarn test`.

To run a single test, run `yarn test --grep 'test name'`, specifying the name of the test you wish to run.

You can find the tests in the `test` directory. The `Component.spec.js` files depend on `bootstrap.js`.

### To lint and fix files
Run 
```
yarn lint
```

## Contributors
1. Mollie Marr @molliem conceieved the project and guided the developement.
2. Jordan Matlesky @j6k4m8 artd the project and mentored the GLAM team.
3. Janet Davis @ProfJanetDavis (Mentor for the GLAMLab Developers, summer 2020)
4. Ahmed Elsayed @elsayeaa (Main Developer, summer 2020)
5. Dylan Wu @dylanjwu (Main Developer, summer 2020)
6. Kalilou Ali Kadiri @kaliloua7 (Main Developer, summer 2020)
7. Nidhi Jaltare @nidhi2509 (Main Developer, summer 2020)
8. Zoë Hill @Life1999 (Main Developer, summer 2020)

    
