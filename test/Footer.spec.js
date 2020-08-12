/* eslint-disable no-undef */
describe('The footer', function() {
    let page;
    before(async function() {
        page = await browser.newPage();
        await page.goto(PAGE_URL);
    });

    after(async function() {
        await page.close();
    })
    it('should contain a valid link to the project GitHub', async function() {
        const HREF = await page.evaluate(() => {
            let a = document.querySelector('a[href]');
            return a.getAttribute('href');
        });
        let response = await page.goto(HREF);
        expect(response._status).to.eql(200);
    });
});