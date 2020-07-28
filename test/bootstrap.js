/* eslint-disable no-undef */
const puppeteer = require('puppeteer');
const { expect } = require('chai').use(require('chai-string'));
const _ = require('lodash');
const globalVariables = _.pick(global, ['browser', 'expect']);

// eslint-disable-next-line no-unused-vars

// expose variables
before(async function() {
    global.expect = expect;
    global.browser = await puppeteer.launch();

    // Header
    global.HEADING_SELECTOR = 'h1.title';
    global.DESCR_SELECTOR = 'h1.title+p';

    // Main
    global.SEL_TEXTAREA = 'textarea';
    global.SEL_SUBMIT = '.submit-button';
    global.SEL_BACK = '.back-button';
    global.SEL_BLURBS = '.blurbs';

    // Blurb
    global.SEL_CONTAINER = '#container';
    global.SEL_NEGATIVEBIAS = '.negativeBias';
    global.SEL_TOOLTIP = 'span#tooltip h1';
    global.SEL_NOTICE = '.notice';

    // Summary
    global.SEL_SIDEBAR_CONTAINER = '.sidebarContainer';
    global.SEL_ISSUE = '.issue';
    global.SEL_ISSUE_P = '.issue p';
    global.SEL_ISSUE_HOVER = ".issue:hover";

    global.TEXT = "Some willing text";
    global.PAGE_URL = 'http://localhost:8080/serve-vue-app/';
});

// close browser and reset global variables
after(function() {
    browser.close();

    global.browser = globalVariables.browser;
    global.expect = globalVariables.expect;
});