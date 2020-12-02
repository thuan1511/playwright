const {MainPage} = require('../framework')
const expect = require('expect');
const { chromium } = require('playwright');
let browser;
let page;
let context;

beforeAll(async () => {
  browser = await chromium.launch({headless: false});
});
afterAll(async () => {
  await browser.close();
});
beforeEach(async () => {
  context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://fabet.info/');
});
afterEach(async () => {
  await browser.close();
});
test('Login', async () => {
  const mainPage = new MainPage(page);
  await mainPage.login('jimbi01', '123456');
  await page.screenshot({ path: `screenshots/example-${Date.now()}.png` });
  const text = await page.title();
  console.log(text);
  expect(text).toBe('Thông tin tài khoản');
}, 60000);
