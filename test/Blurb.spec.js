describe('A blurb', function() {
    const TEXT = 'Some text';

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

    it('should appear');
    it('should have the style class "notice"');
    it('should have the style class "negativeBias"');
    it('should be highlighted on mouseover');
    it('should display a tooltip on mouseover');

    describe('The tooltip', async function() {
        it('should have a title');
        it('should have some further text');
    });

    describe('Other text', async function() {
        it('should not have the style class "notice"');
        it('should not be highlighted or display a tooltip on mouseover');
    });
});