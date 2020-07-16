describe('The Summary', function() {
    let page;
    before(async function() {
        page = await browser.newPage();
        await page.goto('http://localhost:8080');
    });

    after(async function() {
        await page.close();
    });

    describe('Initially', function() {

        it("it shouldn't exist until the Sidebar component is shown", async function() {
            const summariescontainer = await page.$(SEL_SIDEBAR_CONTAINER);
            expect(summariescontainer).to.be.null;
        });

    });

    describe('After Submission', function() {

        const TEXT = "Some willing text";
        before(async function() {

            await page.type(SEL_TEXTAREA, TEXT);

            const button = await page.$(SEL_SUBMIT);
            await button.click();
        });

        it('it should appear after submission', async function() {
            const summariescontainer = await page.$(SEL_SIDEBAR_CONTAINER);
            expect(summariescontainer).to.not.be.null;

        });

        it('it should have the a real summary text', async function() {
            await page.waitFor(SEL_ISSUE_P);
            expect(await page.$$(SEL_ISSUE_P)).to.have.lengthOf(2);
        });

        it('it should be highlighted on mouseover', function() {
            this.skip('not sure how to test style on a hover event.');

            // const element = await page.hover('.issue');
            // const color = await page.evaluate(element => element, element);
            // expect(color).to.be.null;
        });

    });

});