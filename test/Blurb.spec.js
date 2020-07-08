/* eslint-disable no-undef */
describe('A blurb', function() {
    const TEXT = 'Some willing text';

    let page;

    before(async function() {
        page = await browser.newPage();
        await page.goto('http://localhost:8080');

        await page.type(SEL_TEXTAREA, TEXT);

        let button = await page.$(SEL_SUBMIT);
        await button.click();
    });

    after(async function() {
        await page.close();
    });

    // #1 (Done)
    it('should appear', async function() {
        await page.waitFor("#container");
        // We thought that there shouldn't be only one blurb, and since we are uncertain how many blurbs we have, so we don't expect any length! 
        // We thought of having a variable that will track the number of blurbs, and we will expect the length to equal to that variable, 
        // but it is not an elegant way of coding. 
    });
    // #2 
    it('should have the style class "notice"', async function() {
        await page.waitFor(SEL_NOTICE);
        expect(await page.$$(SEL_NOTICE)).to.have.lengthOf(1);
    });
    // #3 
    it('should have the style class "negativeBias"', async function() {
        await page.waitFor('.negativeBias');
    });
    // #4 
    it('should be highlighted on mouseover', async function() {
        await page.hover(SEL_NOTICE);
        expect(await page.$$(SEL_NOTICE)).to.have.lengthOf(1);
    });
    // #5 
    it('should display a tooltip on mouseover');


    describe('The tooltip', function() {

        // #6
        it('should have a title', async function() {
            await page.waitFor(SEL_TOOLTIP);

            expect(await page.$(SEL_TOOLTIP)).to.not.be.undefined;
        });
        // #7
        it('should have some further text');
    });

    describe('Other text', async function() {

        // #8
        it('should not have the style class "notice"', async function() {

            const SEL_UNFLAGGED = await page.evaluate(() => {
                const string = 'Some';
                const selector = '#feedback #container';
                let containers = document.querySelectorAll(selector);

                for (let container of containers) {
                    if (container.innerText.includes(string)) {
                        return container;
                    }
                }
            });

            const element = await page.$(SEL_UNFLAGGED + " #tooltip");
            expect(element).to.be.null;

        });
        // #9
        it('should not be highlighted or display a tooltip on mouseover');
    });
});