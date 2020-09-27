/* eslint-disable no-undef */
describe('A blurb', function() {
    let page;
    before(async function() {
        page = await browser.newPage();
        await page.goto(PAGE_URL);
        await page.type(SEL_TEXTAREA, TEXT);

        const button = await page.$(SEL_SUBMIT);
        await button.click();
    });
    after(async function() {
        await page.close();
    });

    it('should appear', async function() {
        await page.waitFor(SEL_CONTAINER);
        expect(await page.$(SEL_CONTAINER)).to.exist;
    });
    it('should have the style class "notice"', async function() {
        await page.waitFor(SEL_NOTICE);
        expect(await page.$$(SEL_NOTICE)).to.have.lengthOf(1);
    });
    it('should have the style class "negativeBias"', async function() {
        await page.waitFor(SEL_NEGATIVEBIAS);
        expect(await page.$$(SEL_NEGATIVEBIAS)).to.have.lengthOf(1);
    });
    it('should be highlighted on mouseover', async function() {
        await page.hover(SEL_NOTICE);
        expect(await page.$$(SEL_NOTICE)).to.have.lengthOf(1);
    });
    it('should display a tooltip on mouseover', async function() {
        await page.waitFor(SEL_TOOLTIP);
        expect(await page.$(SEL_TOOLTIP)).to.exist;
    });

    it('should highlight corresponding summary on hover', async function() {
        await page.hover(SEL_NOTICE);

        const element = await page.$("#summary .issueHover");
        expect(element).to.exist;
    });

    describe('should be rendered correctly', function() {
        let page;
        before(async function() {
            page = await browser.newPage();
            await page.goto(PAGE_URL);
            await page.type(SEL_TEXTAREA, 'Start. There is a flag in the middle of the text. End.');

            const button = await page.$(SEL_SUBMIT);
            await button.click();
        });
        after(async function() {
            await page.close();
        });
        it('should get different text', async function() {
            const element = await page.$(SEL_BLURBS);
            const text = await page.evaluate(element => element.innerText, element);
            expect(text).to.include("middle");
        });
        it('at the start of the text.', async function() {
            const element = await page.$$(SEL_NOTICE);
            const text = await page.evaluate(element => element.innerText, element[0]);
            expect(text).to.eql("Start ");
        });
        it('at the end of the text.', async function() {
            const element = await page.$$(SEL_NOTICE);
            const text = await page.evaluate(element => element.innerText, element[2]);
            expect(text).to.eql("End ");
        })
    });

    describe('The tooltip', function() {

        // the 2nd tooltip (index 1) is tested 
        // since the 1st tooltip is not meant to be displayed

        it('should have a title', async function() {
            const element = await page.$$(SEL_TOOLTIP);
            const text = await page.evaluate(el => el.innerText, element[1]);
            expect(text).to.exist;
        });

        it('should have some further text', async function() {
            const element = await page.$$(SEL_TOOLTIP_CONTENT);
            const text = await page.evaluate(el => el.innerText, element[1]);
            expect(text).to.exist;
        });
    });

    describe('Other text', async function() {
        let SEL_UNFLAGGED;
        before(async function() {
            SEL_UNFLAGGED = await page.evaluate(() => {
                const string = 'Some',
                    selector = '#feedback #container',
                    containers = document.querySelectorAll(selector);

                //finds container that contains string that should not be flagged
                for (let container of containers) {
                    if (container.innerText.includes(string))
                        return container;
                }
            });
        });

        it('should not have the style class "notice"', async function() {
            const element = await page.$(SEL_UNFLAGGED + SEL_NOTICE);
            expect(element).to.be.null;
        });
        it('should not be highlighted or display a tooltip on mouseover', async function() {
            await page.hover(SEL_NOTICE);
            const element = await page.$(SEL_UNFLAGGED + SEL_TOOLTIP);
            expect(element).to.be.null;
        });
    });
});