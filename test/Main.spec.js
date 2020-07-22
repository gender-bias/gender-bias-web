/* eslint-disable no-undef */
describe('The main component', function() {
    let page;
    let initialTextAreaWidth;

    before(async function() {
        page = await browser.newPage();
        await page.goto('http://localhost:8080');
    });

    after(async function() {
        await page.close();
    });

    async function getElementWidth(selector) {
        const elementStyle = await page.evaluate(sel => {
            const element = document.querySelector(sel);
            return JSON.parse(JSON.stringify(getComputedStyle(element)));
        }, selector);
        return parseInt(elementStyle.width);
    }

    describe('initially', function() {

        it('should show one textarea', async function() {
            await page.waitFor(SEL_TEXTAREA);
            initialTextAreaWidth = await getElementWidth(SEL_TEXTAREA);
            expect(await page.$$(SEL_TEXTAREA)).to.have.lengthOf(1);
        });

        it('should display instructions in the textarea', async function() {
            await page.waitFor(SEL_TEXTAREA);
            expect(await page.$(SEL_TEXTAREA).placeholder).to.not.eql("");
        });

        it('should have a submit button', async function() {
            await page.waitFor(SEL_SUBMIT);
            expect(await page.$$(SEL_SUBMIT)).to.have.lengthOf(1);
        });
    });

    describe('after receiving a response', function() {

        before(async function() {
            await page.type(SEL_TEXTAREA, TEXT);

            const button = await page.$(SEL_SUBMIT);
            await button.click();
        });

        it('should have a back button', async function() {
            await page.waitFor(SEL_BACK);
            expect(await page.$$(SEL_BACK)).to.have.lengthOf(1);
        });

        it('should show the original text', async function() {
            const element = await page.$(SEL_BLURBS);
            const text = await page.evaluate(element => element.innerText, element);

            expect(text).to.include("Some willing", "text");
        });

        it('should not show the textarea', async function() {
            const textArea = await page.$(SEL_TEXTAREA);
            expect(textArea).to.be.null;
        });

        it('should not show the submit button', async function() {
            const submitBtn = await page.$(SEL_SUBMIT);
            expect(submitBtn).to.be.null;
        });
    });

    describe('after clicking the back button', function() {

        before(async function() {
            const button = await page.$(SEL_BACK);
            await button.click();
        });

        it('should show the textarea with the original text', async function() {
            const element = await page.$(SEL_TEXTAREA);
            const text = await page.evaluate(element => element.value, element);

            expect(text).to.eql(TEXT);
        });

        it('should have a submit button', async function() {
            await page.waitFor(SEL_SUBMIT);
            expect(await page.$$(SEL_SUBMIT)).to.have.lengthOf(1);
        });

        it('should not have a back button', async function() {
            const btn = await page.$(SEL_BACK);
            expect(btn).to.be.null;
        });

        it("should change width of textarea", async function() {
            const currWidth = await getElementWidth(SEL_TEXTAREA)
            expect(currWidth).to.be.below(await initialTextAreaWidth);
        });

        it('should make the sidebar inline with the textArea', function() {
            this.skip('not sure yet how to test this yet');
        });
    });
});