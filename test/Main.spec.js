describe('The Main', function() {
    let page;

    before(async function() {
        page = await browser.newPage();
        await page.goto('http://localhost:8080');
    });

    after(async function() {
        await page.close();
    });

    let checkForSingularElement = async function(selector) {
        await page.waitFor(selector);
        expect(await page.$$(selector)).to.have.lengthOf(1);
    };

    describe('initially', function() {

        it('should show one textarea', async function() {
            await checkForSingularElement(SEL_TEXTAREA);
        });

        it('should display instructions in the textarea', async function() {
            await page.waitFor(SEL_TEXTAREA);
            expect(await page.$(SEL_TEXTAREA).placeholder).to.not.eql("");
        });

        it('should have a submit button', async function() {
            await checkForSingularElement(SEL_SUBMIT);
        });
    });

    describe('after clicking submit', function() {

        it('should make a post request', function() {
            this.skip('This may be ugly to test without stubbing the backend server.');
        });
    });

    describe('after receiving a response', function() {
        const TEXT = 'Some text';

        before(async function() {
            // Enter text in the textarea
            await page.type(SEL_TEXTAREA, TEXT);

            // Click the submit button
            let button = await page.$(SEL_SUBMIT);
            await button.click();
        });

        it('should have a back button', async function() {
            await checkForSingularElement(SEL_BACK);
        });

        it('should show the original text', async function() {
            const element = await page.$(SEL_FEEDBACK);
            const text = await page.evaluate(element => element.innerText, element);

            expect(text).to.include(TEXT);
        });

        it('should not show the textarea', async function() {
            let textArea = await page.$(SEL_TEXTAREA);
            expect(textArea).to.be.null;
        });

        it('should not show the submit button', async function() {
            let submitBtn = await page.$(SEL_SUBMIT);
            expect(submitBtn).to.be.null;
        });
    });

    describe('after clicking the back button', function() {
        const TEXT = "Some text";
        before(async function() {
            // Click the back button
            let button = await page.$(SEL_BACK);
            await button.click();
        });

        it('should show the textarea with the original text', async function() {
            const element = await page.$(SEL_TEXTAREA);
            const text = await page.evaluate(element => element.value, element);

            expect(text).to.eql(TEXT);
        });

        it('should have a submit button', async function() {
            await checkForSingularElement(SEL_SUBMIT);
        });

        it('should not have a back button', async function() {
            let btn = await page.$(SEL_BACK);
            expect(btn).to.be.null;
        });

    });
    describe('The Sidebar', function() {
           
        describe('intially', function() {
    
            it('it should be hidden when we start the server', async function(){
                let sidebar = page.$(SEL_SIDEBAR);
            });
            it('it should have the textArea with big size', async function() {
            
            });
        });
    
        describe('After submission', function() {
            
            it('it should appear', async function() {
    
            });
    
            it('it should have Summary Component(s)', async function() {
    
            });
            it('it should have the correct number of Summary Component(s)', async function(){
            //     let summaries = []; 
            //     let number_of_summaries = 0; 
            //     let test = await page.evaluate( () => {
            //     summaries = document.querySelectorAll(SEL_SUMMARY); 
            //     number_of_summaries = await page.$(SEL_SUMMARY); 
            //     });
            //     expect(number_of_summaries === summaries.length).to.be.true; 
            }); 
            it('it should change the width of the textarea', async function() {

            }); 
            it('it should make the sidebar inline with the textArea', async function() {

            }); 
        }); 
    });
});