const { FakeServer } = require('simple-fake-server');
const fetch = require('node-fetch');

describe('sample test', function() {

    let page;
    let fakeServer;

    before(async function() {
        page = await browser.newPage();
        await page.goto('http://localhost:8080');

        fakeServer = new FakeServer(5000);
        fakeServer.start(); //The FakeServer now listens on http://localhost:5000

    });

    after(async function() {
        fakeServer.stop(); // stop listening
        page.close();
    });


    it('Does something', async() => {
        const route = fakeServer.get('/check').willReturn({ message: "hello world" });

        const response = await fetch('http://localhost:5000/check', { method: 'GET' });
        const body = await response.json();

        expect(response.status).to.equal(200);
        expect(body.message).to.equal("hello world");
        expect(fakeServer.didReceive(route.call)).equal(true);

    });



});