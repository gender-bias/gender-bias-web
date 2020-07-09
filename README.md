# Reading For Gender Bias - FrontEnd (GEL team)
​
## Table of contents 
​
* [Introduction](#Introduction)
* [Technologies](#Technologies)
* [Installation and Usage](#Installation)
* [Resources](#Resources)
* [Features](#Features)
* [Limitations](#Limitations)
* [Credits](#Credits)
​
## Introduction
​
This project is a user-interface web application that employs *Reading for Gender Bias* back-end, [more information here](https://github.com/glam-lab/gender-bias) to create an accessible, text-analysis tool that directs recommenders and evaluators to avoid implicit gender biases in their writings. This process is done through flagging gendered words, phrases, and grindstone adjectives, pointing out shortfalls, and showing a checklist of requirements in a recommendation letter.
​
This project is currently a prototype that is under modification process to be turned into a usable product. Current modifications are monitored through Whitman College Computer Science Summer Research team.
​
## Technologies
​
* Javascript
* Vue Framework
* Puppeteer, mocha, chai for testing
* HTML
* CSS
* yarn/npm as package managers
​
## Installation and Usage
​
### Backend installation process
​
```
git clone https://github.com/gender-bias/gender-bias
cd gender-bias
pip3 install -e .
```
> NOTE: The last line in the above snippet installs this library in "editable" mode, which is probably fine while the library is in a state of flux.
​
### Package Managers to run the project
​
To set up the project, install a package manager such as yarn or npm.
```
yarn install
```
Or 
```
npm install
​
``` 
### Running the front-end 
​
Once installed, add install Vue, and use yarn to open the server locally. Go to the right directory, and start the server. 
​
```
yarn add Vue / npm install vue
yarn serve /npm run server
yarn build
```
​
*To lint and fix files*:
​
```
yarn lint
```
​
​
## Features
​
* Flags that point out problematic ares alongwith the summaries explaining discrepancies
* Words that suggest stereotypical feminity are underlined
* There is a checklist for the recommender to ensure that they covered the essential requirements of a recommendation letter/evaluation
* There is an automated testing environment
* The web application can be used on any browser or device
[comment]: <> (We can add more stuff, but we are not sure if we are going to cover all of the features before this research session!)
​
​
## Limitations
* Plug-ins are not available, which requires the recommender/evaluator to visit the currently developed website. 
* Naturally processing recommendation letters and using them for further research regarding implicit gender biases. 
* There is no way to export the final document as a PDF/docx/doc etc.

## Status
​
This project is currently being developed to be more accessible for users and developers/contributors. 
​
## Resources
​
[Reading for Gender Bias Repistory](https://github.com/glam-lab/gender-bias#reading-for-gender-bias) 
​
## Credits
​
Credits are given to @Mollie, @Jordan for their contributions as product owners.
