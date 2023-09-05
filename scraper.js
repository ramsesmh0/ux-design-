const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = await page.$x('//*[@id="wob_tm"]'); // degrees
  const txt = await el.getProperty('textContent');
  const degrees = await txt.jsonValue();

  const [el2] = await page.$x('//*[@id="oFNiHe"]/div/div/div[1]/span[2]'); // city
  const txt2 = await el2.getProperty('textContent');
  const city = await txt2.jsonValue();

  const [el3] = await page.$x('//*[@id="wob_wc"]/div[1]/div[1]/div/div[2]/span[1]'); // unit
  const txt3 = await el3.getProperty('textContent');
  const unit = await txt3.jsonValue();

  document.getElementById("degrees").textContent = degrees;
  document.getElementById("city").textContent = city;
  document.getElementById("unit").textContent = unit;
  console.log({ degrees, city, unit });

  await browser.close();
}

document.getElementById("submitButton").addEventListener("click", function () {
  var query = document.getElementById('textInput').value;
  scrapeProduct('https://www.google.com/search?q=weather+' + query);
});