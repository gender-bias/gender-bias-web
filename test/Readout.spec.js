describe('The readout', function() {
    let page;

    before(async function() {
        page = await browser.newPage();
        await page.goto('http://localhost:8080');
    });

    after(async function() {
        await page.close();
    });

    let checkForSingularElement = async function (selector) {
        await page.waitFor(selector);
        expect(await page.$$(selector)).to.have.lengthOf(1);
    };

    describe('initially', function() {

        it('should show one textarea', async function() {
            await checkForSingularElement(SEL_TEXTAREA);
        });

        it('should display instructions in the textarea');

        it('should have a submit button', async function() {
            await checkForSingularElement(SEL_SUBMIT);
        });
    });

    describe('after clicking submit', function() {

        it('should make a post request', function() {
            this.skip('This may be ugly to test without stubbing the backend server.');
        });
    });

    describe('after receiving a response', function() {
        const TEXT = 'Some text';

        before(async function() {
            // Enter text in the textarea
            await page.type(SEL_TEXTAREA, TEXT);

            // Click the submit button
            let button = await page.$(SEL_SUBMIT);
            await button.click();
        });

        it('should have a back button', async function() {
            await checkForSingularElement(SEL_BACK);
        });

        it('should show the original text', async function() {
            const element = await page.$(SEL_FEEDBACK);            
            const text = await page.evaluate(element => element.textContent, element);
            expect(text).to.equalIgnoreSpaces(TEXT);            
        });

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