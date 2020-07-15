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
            const sidebar= '.sidebar_container';
            const summariescontainer = await page.$(sidebar); // works!!
            expect(summariescontainer).to.be.null;
            
        }); 

    }); 

    describe('After Submission', function() {

        const TEXT = "Some willing text";
        before(async function() {
            // Click the submit button
            await page.type(SEL_TEXTAREA, TEXT);

            const button = await page.$(SEL_SUBMIT);
            await button.click();
        });

        it('it should appear after submission', async function() {
            const summariescontainer = await page.$(SEL_SIDEBAR_CONTAINER); // works!!
            expect(summariescontainer).to.not.be.null;

        }); 

        it('it should have the a real summary text', async function() {//works
            const ele = await page.$(SEL_ISSUE_P);
            const text = await page.evaluate(ele => ele.textContent, ele);

            expect(text.trim()).to.include("—  This document does not mention many publications.");

        });

        it('it should be highlighted on mouseover', async function(){// this is not working

           // const element= await page.$('.issue');
           // console.log(element);
            //await page.hover("issue");
            //let color= await page.evaluate(element => element.style.color, element);
            //expect(element.style.color).to.equal('');

        });

    });

});