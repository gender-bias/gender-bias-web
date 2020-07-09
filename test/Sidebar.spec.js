describe('The Sidebar', function() {
    let page; 
    before(async function() {
        page = await browser.newPage();
        await page.goto('http://localhost:8080');
    });

    after(async function() {
        await page.close();
    });

    describe('intially', function() {

        it('it should be hidden when we start the server', async function(){
            let sidebar = page.$(SEL_SIDEBAR);
        });
    });

    describe('After submission', function() {

        it('it should appear', async function() {

        });

        it('it should have Summary Component(s)', async function() {

        });
        it('it should have the correct number of Summary Component(s)', async function(){

        }); 
    }); 




















});