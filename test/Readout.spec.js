describe('The readout', function() {
    let page;

    before(async function() {
        page = await browser.newPage();
        await page.goto('http://localhost:8080');
    });

    after(async function() {
        await page.close();
    });

    describe('initially', function() {
        it('should show a textarea');
        it('should display instructions in the textarea');
        it('should have a submit button');
    });

    describe('after clicking submit', function() {
        it('should make a post request');
    });

    describe('after receiving a response', function() {
        it('should have a back button');
        it('should show the original text');
        it('should not show the textarea');
        it('should not show the submit button');
    });

    describe('after clicking the back button', function() {
        it('should show the textarea with the original text');
        it('should have a submit button');
        it('should not have a back button');
        it('should now show the original text outside of the textarea');
    });

});