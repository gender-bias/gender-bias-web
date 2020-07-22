describe('The summary', function() {
    let page;

    before(async function() {
        page = await browser.newPage();
        await page.goto('http://localhost:8080');
    });

    after(async function() {
        await page.close();
    });

    describe('initially', function() {

        it("should not exist", async function() {
            const summariescontainer = await page.$(SEL_SIDEBAR_CONTAINER);
            expect(summariescontainer).to.be.null;
        });
    });

    describe('after submission', function() {

        before(async function() {
            await page.type(SEL_TEXTAREA, TEXT);

            const button = await page.$(SEL_SUBMIT);
            await button.click();
        });

        it('should appear after submission', async function() {
            const summariescontainer = await page.$(SEL_SIDEBAR_CONTAINER);
            expect(summariescontainer).to.exist;
        });

        it('should have correct number of summaries', async function() {
            await page.waitFor(SEL_ISSUE_P);
            expect(await page.$$(SEL_ISSUE_P)).to.have.lengthOf(2);
        });

        it('should be highlighted on mouseover', async function() {
            await page.hover(SEL_ISSUE);

            const issueHover = await page.waitFor(SEL_ISSUE_HOVER);
            expect(issueHover).to.exist;
        });

        it('corresponding flag should be highlighted', async function() {
            await page.hover(SEL_ISSUE);

            const element = await page.$(".issueHover");
            expect(element).to.exist;
        });

    });
});