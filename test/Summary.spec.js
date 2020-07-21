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

            const issueStyle = await page.evaluate(issue => {
                const sel = document.querySelector(issue);
                return JSON.parse(JSON.stringify(getComputedStyle(sel)));
            }, SEL_ISSUE);

            expect(issueStyle.background).to.include('rgb(98, 176, 240)');
        });
    });
});