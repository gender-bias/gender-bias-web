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

    // #1 (Done)
    it('should appear', async function(){
        await page.waitFor("#container");
         // We thought that there shouldn't be only one blurb, and since we are uncertain how many blurbs we have, so we don't expect any length! 
         // We thought of having a variable that will track the number of blurbs, and we will expect the length to equal to that variable, 
         // but it is not an elegant way of coding. 
    });
    // #2 
    it('should have the style class "notice"');
    // #3 
    it('should have the style class "negativeBias"', async function() {
        await page.waitFor('.negativeBias'); 
    } );
    // #4 
    it('should be highlighted on mouseover');
    // #5 
    it('should display a tooltip on mouseover',  function(){
       
    });

    describe('The tooltip', async function() {
        // #6
        it('should have a title');
        // #7
        it('should have some further text');
    });

    describe('Other text', async function() {
        // #8
        it('should not have the style class "notice"');
        // #9
        it('should not be highlighted or display a tooltip on mouseover');
    });
});