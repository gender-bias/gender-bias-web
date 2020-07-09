describe('The Sidebar', function() {
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
            
        }); 

    }); 

    describe('After Submission', function() {

        it('it should appear after submission', async function() {
            await page.waitFor(SEL_SUMMARY);
            expect(await page.$(SEL_SUMMARY)).to.not.be.undefined;
        }); 

        it('it should have the a real summary text', async function() {

        });

        it('it should be highlighted on mouseover', async function(){

        });

    });

}); 