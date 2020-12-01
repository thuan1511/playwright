const {MainPage} = require('../framework')

const { chromium } = require('playwright');
describe('noop spec', function(){
  it('noop it', async function(){
    const browser = await chromium.launch({headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://fabet.info/');

    const mainPage = new MainPage(page);
    await mainPage.login('jimbi01', '123456');
    
    await page.screenshot({ path: `screenshots/example-${Date.now()}.png` });
    await browser.close();
  })
})

// Promise.all([
//   test('https://www.w88live.com/Sports/aSports/'),
//   test('https://debet.com/psport')
// ]).then();