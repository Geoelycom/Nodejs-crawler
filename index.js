const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const url  = 'https://www.reddit.com/r/Bitcoin/';


puppeteer
.launch()
.then((browser) => {
  return browser.newPage();
})


.then((page) => {
  return page.goto(url).then(function(){
    return page.content()
  });
})
.then(html => {
  const $ = cheerio.load(html);
  const membersOfsubReddit = []
  $('._3XFx6CfPlg-4Usgxm0gK8R').each(function(){
    membersOfsubReddit.push({
      number: $(this).text()
    })
  })
  console.log(membersOfsubReddit)

})
.catch(function(err){
  console.log(err)
})