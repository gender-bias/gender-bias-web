/* eslint-disable no-undef */
describe('The header', function() {
    let page;

    before(async function() {
        page = await browser.newPage();
        await page.goto(PAGE_URL);
    });

    after(async function() {
        await page.close();
    })

    it('should show the app title', async function() {
        const HEADING_SELECTOR = 'h1.title';
        let heading;

        await page.waitFor(HEADING_SELECTOR);
        heading = await page.$eval(HEADING_SELECTOR, heading => heading.innerText);

        expect(heading).to.eql('Reading for Gender Bias');
    });

    it('should include a paragraph of description after the app title', async function() {
        const DESCR_SELECTOR = 'h1.title+p';

        await page.waitFor(DESCR_SELECTOR);

        expect(await page.$$(DESCR_SELECTOR)).to.have.lengthOf(1);
    });
});