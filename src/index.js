"use strict";

const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 50 });
  const context = await browser.newContext();
  const page = await context.newPage();
  //open page
  await page.goto("https://web.gencat.cat/ca/inici");
  //click on search icon
  await page.click(".js-search-menu");
  //click on search placeholder
  await page.click('input[name="q"]');
  //fill placeholder with agenda cultural
  await page.fill('input[name="q"]', "agenda cultural");
  //click on search button
  await page.click(".NG-inputSearch__button");
  //close browser
  await browser.close();
})();
