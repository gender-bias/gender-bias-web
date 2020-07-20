/* eslint-disable no-undef */
const puppeteer = require('puppeteer');
const { expect } = require('chai').use(require('chai-string'));
const _ = require('lodash');
const globalVariables = _.pick(global, ['browser', 'expect']);

// puppeteer options
// eslint-disable-next-line no-unused-vars
const opts = {
    headless: false,
    slowMo: 100,
    timeout: 30000
};

// expose variables
before(async function() {
    global.expect = expect;
    global.browser = await puppeteer.launch();
    global.SEL_TEXTAREA = 'textarea';
    global.SEL_SUBMIT = '.submit-button';
    global.SEL_BACK = '.back-button';
    global.SEL_FEEDBACK = '#feedback';
    global.SEL_SIDEBAR = '.sidebar_container';
    global.SEL_READOUT = '.readout_container';
    global.SEL_SUMMARY = '#summary';
    global.SEL_CONTAINER = '#container';
    global.SEL_NEGATIVEBIAS = '.negativeBias';
    global.SEL_TOOLTIP = 'span#tooltip h1';
    global.SEL_NOTICE = '.notice';
    global.SEL_SIDEBAR_CONTAINER = '.sidebar_container';
    global.SEL_ISSUE = '.issue';
    global.SEL_ISSUE_P = '.issue p';
    global.TEXT = "Some willing text";

});

// close browser and reset global variables
after(function() {
    browser.close();

    global.browser = globalVariables.browser;
    global.expect = globalVariables.expect;
});
